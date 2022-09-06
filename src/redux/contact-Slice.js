import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialContacts = {
  value: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: (state, action) => {
      state.value.push(action.payload);
    },
    removeContact: (state, action) => {
      state.value = state.value.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, removeContact, setContacts } = contactSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedContactSlice = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export default persistedContactSlice;
