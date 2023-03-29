import { useState, useEffect, useRef } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './Element/Element.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const didMount = useRef(false);

  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem('contacts')));
  }, []);

  useEffect(() => {
    if (didMount.current) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else didMount.current = true;
  }, [contacts]);

  const addContact = cont => {
    const newContact = {
      ...cont,
      id: nanoid(),
    };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const onChange = ({ target }) => {
    setFilter(target.value);
  };

  const filterContacts = (arr, filter) => {
    return arr.filter(ell =>
      ell.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <h3>PhoneBook</h3>
      <ContactForm contacts={contacts} addContact={addContact}></ContactForm>
      <Filter onChange={onChange} filter={filter}></Filter>
      <h3>Contacts</h3>
      <ContactList
        contacts={filterContacts(contacts, filter)}
        deleteContact={deleteContact}
      ></ContactList>
    </Container>
  );
};
//

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
