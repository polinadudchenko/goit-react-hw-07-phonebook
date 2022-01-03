import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from 'services/contact-api'

const fetchContacts = createAsyncThunk('contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },)

const addContact = createAsyncThunk('contacts/addContact',
    async (contact) => {
      const contactToAdd = await contactsApi.addContact(contact);
      return contactToAdd;
  },)

const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (contactId) => {
        await contactsApi.deleteContactById(contactId);
      return contactId;
  },)

export {fetchContacts, addContact, deleteContact}