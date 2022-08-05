import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/apiConstants';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.headers = {
//   'x-api-key': API_KEY,
// };

export async function fetchBreedsList() {
  const { data } = await axios.get('/breeds');
  return data;
}

// export async function fetchContacts() {
//   const { data } = await axios.get('/contacts');
//   return data;
// }

// export async function addContact(contact) {
//   const { data } = await axios.post('/contacts', contact);
//   return data;
// }

// export async function deleteContact(contactId) {
//   const { data } = await axios.delete(`/contacts/${contactId}`);
//   return data;
// }
// export async function patchContact(contact, contactId) {
//   const { data } = await axios.patch(`/contacts/${contactId}`, contact);
//   return data;
// }
