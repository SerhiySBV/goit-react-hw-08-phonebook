import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  editContact,
} from './contacts/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    [editContact.pending]: handlePending,
    [editContact.rejected]: handleRejected,
    [editContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
  },
});

export const contactReducer = contactsSlice.reducer;
