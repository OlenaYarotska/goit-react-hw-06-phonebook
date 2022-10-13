// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import ContactForm from './Components/ContactForm/ContactForm';
import './App.css';
import { Section, Heading } from './App.styled';

function App() {
  return (
    <>
      <Heading>Phonebook</Heading>
      <ContactForm/>
      <Section title="Contacts">Contacts</Section>
      <Filter />
      <ContactList />
    </>
  );
}
export default App;
