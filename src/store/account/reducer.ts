import TYPES from './action-types';
import { IAction } from '../../interfaces/redux/IAction';

export interface IAccountState {
  id: string | number | null;
}

const initialState: IAccountState = {
  id: null,
};

export default (state = initialState, { type, payload }: IAction<TYPES>): IAccountState => {
  switch (type) {
    case TYPES.LOGIN:
      return { ...state, id: payload.id };

    case TYPES.LOGOUT:
      return { ...initialState };

    default:
      return { ...state };
  }
};
