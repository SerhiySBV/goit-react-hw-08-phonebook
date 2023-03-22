import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Navigation } from './Navigation/Navigation';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Suspense fallback={<h1>LOADING...</h1>}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

// Created width backend & React query

// import ContactForm from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';

// const App = () => {
//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </div>
//   );
// };
// export default App;

// CREATED BY HOOK

// import { useState, useEffect } from 'react';
// // import { nanoid } from 'nanoid';
// import ContactForm from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';

// const App = () => {
//   const [contacts, setContacts] = useState(
//     () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
//   );
//   const [filter, setFilter] = useState('');

//   const addSubmitUserData = values => {
//     if (checkContacts(contacts, values)) {
//       return alert(`${values.name} is already in contacts`);
//     }

//     setContacts(prevState => [values, ...prevState]);
//   };

//   const checkContacts = (contacts, values) => {
//     return contacts.find(contact => contact.name === values.name.trim());
//   };

//   const deleteContact = contactId => {
//     setContacts(prevState =>
//       prevState.filter(contact => contact.id !== contactId)
//     );
//     setFilter('');
//   };
//   const changeFilter = event => {
//     setFilter(event.currentTarget.value);
//   };

//   const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   useEffect(() => {
//     window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={addSubmitUserData} />
//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactList
//         contacts={getVisibleContacts()}
//         onDeleteContact={deleteContact}
//       />
//     </div>
//   );
// };
// export default App;

// CREATED BY CLASS

// class App extends Component {
// state = {
//   contacts: [
//      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     // { id: 'id-2', name: 'Hermione Klinen', number: '443-89-12' },
//     // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// addSubmitUserData = values => {
//   values.id = nanoid();
//   if (this.checkContacts(this.state.contacts, values)) {
//     return alert(`${values.name} is already in contacts`);
//   }

//   this.setState(prevState => ({
//     contacts: [values, ...prevState.contacts],
//   }));
// };

// checkContacts = (contacts, values) => {
//   return contacts.find(contact => contact.name === values.name.trim());
// };

// deleteContact = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   }));
// };

// changeFilter = event => {
//   this.setState({ filter: event.currentTarget.value });
// };

// getVisibleContacts = () => {
//   const { filter, contacts } = this.state;
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };
// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsContacts = JSON.parse(contacts);
//   if (parsContacts) {
//     this.setState({ contacts: parsContacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }

//   render() {
//     const { filter } = this.state;

//     // Filter
//     const filteredContacts = this.getVisibleContacts();

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.addSubmitUserData} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={filteredContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;
