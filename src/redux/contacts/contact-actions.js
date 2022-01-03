import { createAction } from '@reduxjs/toolkit';
//import { v1 as uuidv1 } from 'uuid';



export const fetchContactsRequest = createAction('contacts/fetchContactRequest')
export const fetchContactsSuccess = createAction('contacts/fetchContactSuccess')
export const fetchContactsError = createAction('contacts/fetchContactError')

export const addContactRequest = createAction('contacts/addContactRequest')
export const addContactSuccess = createAction('contacts/addContactSuccess')
export const addContactError = createAction('contacts/addContactError')

export const deleteContactRequest = createAction('contacts/deleteContactRequest')
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess')
export const deleteContactError = createAction('contacts/deleteContactError')
/* export const addContact = createAction('contacts/add', (name, number) => ({
    payload: {
        id: uuidv1(),
        name,
        number
    }
}));

export const deleteContact = createAction('contacts/delete'); */
export const filterContacts = createAction('contacts/filter');