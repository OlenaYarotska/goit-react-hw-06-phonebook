import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';

const itemsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

 export const contactsSlice = createSlice({
    name: 'contacts',
   initialState: {
     items: [],
     filter: '',
    },
    reducers: {
        addContacts(state, action) {
            state.items.push(action.payload);
        },
        deleteContacts(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload);
      },
         filterContacts(state, action) {
           state.filter = action.payload
        },
    }
 })
export const contactsReducer = persistReducer(
  itemsPersistConfig,
  contactsSlice.reducer,
)

export const { addContacts, deleteContacts, filterContacts } = contactsSlice.actions;

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;