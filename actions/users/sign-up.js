import API from '../../lib/api';
import loadUser from './load';
import {
  API_LOADING,
  API_READY,
  API_ERROR,
} from '../../middleware/api'

export const USER_SIGNED_IN = 'USER_SIGNED_IN';
export const USER_AUTH_ERROR = 'USER_AUTH_ERROR';
const api = new API();
const users = api.service('users');

export default (user) => {
  console.log('creating user...');
  users.create(user)
    .then((result) => {
      console.log('user successfully created', result);
    })
    .catch((error) => {
      console.error('o-ou there was an error', error);
    });
}
