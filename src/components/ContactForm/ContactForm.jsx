import { Report } from 'notiflix/build/notiflix-report-aio';
import { InputData } from './ContactForm.styled';
import { Button } from 'components/Element/Element.styled';
import { useState } from 'react';

export const ContactForm = ({ addContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeHandler = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    const arrOfName = contacts.map(({ name }) => name);
    arrOfName.includes(name)
      ? Report.failure('Failure', 'Name is already in contacts.', 'Okay')
      : addContact({ name: name, number: number });
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <InputData
          type="text"
          name="name"
          value={name}
          onChange={changeHandler}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <InputData
          type="tel"
          name="number"
          value={number}
          onChange={changeHandler}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button>Add contact</Button>
      </form>
    </>
  );
};
