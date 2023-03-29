import PropTypes from 'prop-types';
import { Button } from 'components/Element/Element.styled';
import { ContactItemLi } from './ContactItem.styled';

export const ContactItem = ({ id, number, name, deleteContact }) => (
  <ContactItemLi>
    <p>name: {name}</p>
    <p>number: {number}</p>
    <Button onClick={() => deleteContact(id)}>Delete</Button>
  </ContactItemLi>
);
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
