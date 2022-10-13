import propTypes from 'prop-types';
import { ContactName, ContactNumber, Button } from './ContactItem.styled';

const ContactItem = ({ name, number, id, onDelete }) => {
 
  return (
    <>
      <li key={id}>
        <ContactName>{name}:</ContactName>
        <ContactNumber>{number}</ContactNumber> 
        <Button type="button" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </li>
    </>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};
