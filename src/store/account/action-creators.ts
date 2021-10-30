import TYPES from './action-types';
import { IAccountState } from '@store/account/reducer';

export const login = (id: IAccountState['id']) => ({
  type: TYPES.LOGIN,
  payload: { id },
});

export const logout = () => ({
  type: TYPES.LOGOUT,
  payload: {},
});
