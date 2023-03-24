import ContactItem from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';

export const getFilter = state => state.filter;

const ContactList = () => {
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();
  const getVisibleContacts = () => {
    const normalizedFilter = filterValue.toLocaleLowerCase();
    return filterValue
      ? contacts.filter(contact =>
          contact.name.toLocaleLowerCase().includes(normalizedFilter)
        )
      : contacts;
  };
  const filteredContacts = getVisibleContacts();
  return (
    <ul
      style={{
        display: 'grid',
        gridTemplateColumns: '160px 150px 100px 100px',
        alignItems: 'center',
      }}
    >
      {contacts &&
        filteredContacts.map(({ name, number, id }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={() => {
              dispatch(deleteContact(id));
            }}
          />
        ))}
    </ul>
  );
};

export default ContactList;
