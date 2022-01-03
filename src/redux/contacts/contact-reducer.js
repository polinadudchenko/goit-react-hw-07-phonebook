import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    filterContacts
} from './contact-actions'

import { toast } from "react-toastify";

const items = createReducer([], {
  [fetchContactsSuccess]: (_, {payload}) => payload,
  [addContactSuccess]: (state, { payload }) => {
    if (state.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase())) {
                return toast.info('This contact already in the addressbook')
            }
            return [...state, payload]
  },
  [deleteContactSuccess]: (state, { payload }) => state.filter(({id}) => id !== payload)
})

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
})

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload
})

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  isLoading,
  error
});