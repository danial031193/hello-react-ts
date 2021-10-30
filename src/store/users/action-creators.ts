import TYPES from './action-types';
import { IUsersState } from '@store/users/reducer';

export const addUser = () => ({
  type: TYPES.ADD_USER,
  payload: {},
});

export const updateUsersList = (list: IUsersState['list']) => ({
  type: TYPES.UPDATE_USERS_LIST,
  payload: { list },
});

export const removeUser = (id: string | number) => ({
  type: TYPES.REMOVE_USER,
  payload: { id },
});

export const updateNewUser = (key: string, value: string) => ({
  type: TYPES.UPDATE_NEW_USER,
  payload: { key, value },
});
