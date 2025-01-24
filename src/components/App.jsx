import './App.css';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

import contactsData from '../data/contactsData.json';
import { useEffect, useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(() => {
    let savedContacts = window.localStorage.getItem('contacts');

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return contactsData;
  });

  const [filter, setFilter] = useState(() => {
    let savedFilter = window.localStorage.getItem('filter');

    if (savedFilter !== null) {
      return savedFilter;
    }

    return '';
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    window.localStorage.setItem('filter', filter);
  }, [filter]);

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} contactsData={contacts} />
      <ContactList contactsData={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
