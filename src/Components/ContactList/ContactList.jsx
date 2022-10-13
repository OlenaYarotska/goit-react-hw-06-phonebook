import propTypes from 'prop-types';
import { ContactsList } from './ContactList.styled';
import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { deleteContacts, getContacts, getFilter } from 'redux/reducer';
import { useDispatch } from 'react-redux';

const ContactList = () => {
 
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilter);
  const dispatch = useDispatch();
  const deleteContact = id => dispatch(deleteContacts(id));

  const contactNames = contacts.filter(contact => contact.name.toLowerCase().includes(filteredContacts.toLowerCase()));

  return (
    <ContactsList>
      {contactNames.map(({ name, id, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
          onDelete={deleteContact}
        />
      ))}
    </ContactsList>
  );
};
export default ContactList;

ContactList.propTypes = {
  contactNames: propTypes.arrayOf(propTypes.object),
};
