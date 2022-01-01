import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts} from './actions'

import { toast } from "react-toastify";

const contacts = createReducer([], {
  [addContact]: (state, { payload }) => {
    if (state.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase())) {
                return toast.info('This contact already in the addressbook')
            }
            return [...state, payload]
  },
  [deleteContact]: (state, { payload }) => state.filter(({id}) => id !== payload)
})

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload
})

export default combineReducers({
  contacts,
  filter,
});