import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';

export const getFilter = state => state.filter;

const ContactList = () => {
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(selectAllContacts);

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
    <ul>
      {contacts &&
        filteredContacts.map(contact => (
          <li
            key={contact.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '160px 150px 100px 100px',
              alignItems: 'center',
            }}
          >
            <ContactItem contact={contact} />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
