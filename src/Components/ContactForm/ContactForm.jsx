import { useState } from 'react';
import { FormWrapper, Form, Label, Input, Button } from './ContactForm.styled';
import { addContacts } from 'redux/reducer';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

function ContactForm() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const dublicateNameCheck = contacts => {
    const normalizedContacts = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (normalizedContacts) {
      return alert(`${name} is already in contacts.`);
    }
  }

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value)
    } else {
      setNumber(evt.target.value)
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    reset();
    if (dublicateNameCheck(items)) {
      return;
    } else dispatch(addContacts({ name, number, id: nanoid() }))
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </FormWrapper>
  );
}
export default ContactForm;
