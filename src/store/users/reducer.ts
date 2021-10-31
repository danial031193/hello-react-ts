import TYPES from './action-types';
import { IAction } from '@interfaces/redux/IAction';
import { IUser } from '@interfaces/user/i-user';

export interface IUsersState {
  list: IUser[];
  newUser: Record<'username' | 'password' | any, string>;
}

export const userList = [
  { id: 1, username: 'user-1', password: '123' },
  { id: 2, username: 'user-2', password: '123' },
  { id: 3, username: 'user-3', password: '123' },
  { id: 4, username: 'user-4', password: '123' },
  { id: 5, username: 'user-5', password: '123' },
  { id: 6, username: 'user-6', password: '123' },
  { id: 7, username: 'user-7', password: '123' },
  { id: 8, username: 'user-8', password: '123' },
  { id: 9, username: 'user-9', password: '123' },
  { id: 10, username: 'user-10', password: '123' },
];

const initialState: IUsersState = {
  list: userList,
  newUser: {},
};

export default (state = initialState, { type, payload }: IAction<TYPES>): IUsersState => {
  switch (type) {
    case TYPES.UPDATE_USERS_LIST:
      return { ...state, list: payload.list };

    case TYPES.UPDATE_NEW_USER:
      return { ...state, newUser: { ...state.newUser, [payload.key]: payload.value } };

    default:
      return { ...state };
  }
};
