import { Component } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { InputData } from './ContactForm.styled';
import { Button } from 'components/Element/Element.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  changeHandler = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  submitHandler = e => {
    e.preventDefault();
    const { addContact, contacts } = this.props;
    const arrOfName = contacts.map(({ name }) => name);
    arrOfName.includes(this.state.name)
      ? Report.failure('Failure', 'Name is already in contacts.', 'Okay')
      : addContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <InputData
            type="text"
            name="name"
            value={name}
            onChange={this.changeHandler}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <InputData
            type="tel"
            name="number"
            value={number}
            onChange={this.changeHandler}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button>Add contact</Button>
        </form>
      </>
    );
  }
}

export default ContactForm;
