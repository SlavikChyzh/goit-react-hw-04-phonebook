import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Conteiner } from './Element/Element.styled';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = cont => {
    const newContact = {
      ...cont,
      id: nanoid(),
    };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };
  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };
  onChange = ({ target }) => {
    this.setState({ filter: target.value });
  };
  filterContacts = (arr, filter) => {
    return arr.filter(ell =>
      ell.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <Conteiner>
        <h3>PhoneBook</h3>
        <ContactForm
          contacts={this.state.contacts}
          addContact={this.addContact}
        ></ContactForm>
        <Filter onChange={this.onChange} filter={this.state.filter}></Filter>
        <h3>Contacts</h3>
        <ContactList
          contacts={this.filterContacts(this.state.contacts, this.state.filter)}
          deleteContact={this.deleteContact}
        ></ContactList>
      </Conteiner>
    );
  }
}
