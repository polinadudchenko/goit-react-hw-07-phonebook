import axios from 'axios';

axios.defaults.baseURL = 'https://61d194c4da87830017e5929c.mockapi.io'

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContactById(contactId) {
  await axios.delete(`/contacts/${contactId}`);
}