// import { createSlice } from '@reduxjs/toolkit';
// import {
//   addContact,
//   deleteContact,
//   fetchContacts,
//   editContact,
// } from './contacts/operations';

// const initialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,

//   extraReducers: {
//     [fetchContacts.pending]: handlePending,
//     [fetchContacts.rejected]: handleRejected,
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [addContact.pending]: handlePending,
//     [addContact.rejected]: handleRejected,
//     [addContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [deleteContact.pending]: handlePending,
//     [deleteContact.rejected]: handleRejected,
//     [deleteContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     [editContact.pending]: handlePending,
//     [editContact.rejected]: handleRejected,
//     [editContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = state.items.map(item => {
//         if (item.id === action.payload.id) {
//           return action.payload;
//         }
//         return item;
//       });
//     },
//   },
// });

// export const contactReducer = contactsSlice.reducer;

import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';
const contactsInitState = [];
const extraActions = [fetchContacts, addContact, editContact, deleteContact];
const getActions = type => extraActions.map(action => action[type]);
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  toast.error('Something went wrong..');
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
  toast.success('Here we go!');
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: contactsInitState,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    return builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        // console.log(action.payload.id);
        const filtredItems = state.items.filter(
          item => item.id !== action.payload.id
        );
        state.items = filtredItems;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled);
  },
});
export const contactsReducer = contactsSlice.reducer;
