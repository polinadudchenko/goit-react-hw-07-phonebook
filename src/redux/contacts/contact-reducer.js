import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {filterContacts} from './contact-actions'
import { addContact, deleteContact, fetchContacts } from './contact-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, {payload}) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) => state.filter(({id}) => id !== payload)
})

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  
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