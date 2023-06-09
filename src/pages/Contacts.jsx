import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Contacts = () => {
  return (
    <div style={{ padding: '15px' }}>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '30px',
        }}
      >
        <h1>Phonebook</h1>
        {selectIsLoggedIn && <UserMenu></UserMenu>}
      </header>

      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
export default Contacts;
