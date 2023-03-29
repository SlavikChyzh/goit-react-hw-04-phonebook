import { InputData } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ onChange, filter }) => (
  <InputData
    type="text"
    name="name"
    value={filter}
    onChange={onChange}
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
  />
);

export default Filter;
