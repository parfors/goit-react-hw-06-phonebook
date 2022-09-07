import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contact-Slice';
import filterReducer from './filter-Slice';
import colorReducer from './color-Slice';

const rootReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
  color: colorReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// ===============================USING REDUX-TOOLKIT=================================

// import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';
// import { combineReducers } from '@reduxjs/toolkit';

// export const addContact = createAction('contacts/add');
// export const removeContact = createAction('contacts/remove');
// export const setContacts = createAction('contacts/set');
// export const setFilter = createAction('contacts/filter');

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const contactsReducer = createReducer(initialContacts, {
//   [addContact]: (state, action) => [...state, action.payload],
//   [removeContact]: (state, action) =>
//     state.filter(el => el.id !== action.payload),
//   [setContacts]: (state, action) => action.payload,
// });

// const filterReducer = createReducer('', {
//   [setFilter]: (state, action) => action.payload,
// });

// export const store = configureStore({
//   reducer: {
//     contacts: combineReducers({
//       items: contactsReducer,
//       filter: filterReducer,
//     }),
//   },
// });

// ===============================USE REDUX=========================================

// import { createStore } from 'redux';

// export const initialState = {
//   contacts: {
//     items: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   },
// };

// const ADD = 'contact/add';
// const REMOVE = 'contact/remove';
// const SET = 'contact/set';
// const FILTER = 'contact/filter';

// export const addContact = contact => {
//   return {
//     type: ADD,
//     payload: contact,
//   };
// };

// export const removeContact = id => {
//   return {
//     type: REMOVE,
//     payload: id,
//   };
// };

// export const setContacts = data => {
//   return {
//     type: SET,
//     payload: data,
//   };
// };

// export const setFilter = data => {
//   return {
//     type: FILTER,
//     payload: data,
//   };
// };

// export const reducer = (state = initialState, action) => {
//   const contactItems = state.contacts.items;
//   const filter = state.contacts.filter;
//   switch (action.type) {
//     case ADD:
//       return {
//         contacts: {
//           items: [...contactItems, action.payload],
//           filter: filter,
//         },
//       };
//     case REMOVE:
//       return {
//         contacts: {
//           items: contactItems.filter(el => el.id !== action.payload),
//           filter: filter,
//         },
//       };
//     case SET:
//       return {
//         contacts: {
//           items: action.payload,
//           filter: filter,
//         },
//       };
//     case FILTER:
//       return {
//         contacts: {
//           items: [...contactItems],
//           filter: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// export let store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
