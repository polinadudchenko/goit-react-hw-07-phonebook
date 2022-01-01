import { createAction } from '@reduxjs/toolkit';
import { v1 as uuidv1 } from 'uuid';

export const addContact = createAction('contacts/add', (name, number) => ({
    payload: {
        id: uuidv1(),
        name,
        number
    }
}));

export const deleteContact = createAction('contacts/delete');
export const filterContacts = createAction('contacts/filter');