import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <ContactItem
        key={id}
        id={id}
        number={number}
        name={name}
        deleteContact={deleteContact}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};
