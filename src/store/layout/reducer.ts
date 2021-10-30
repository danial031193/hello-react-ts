import TYPES from './action-types';
import { IAction } from '@interfaces/redux/IAction';

export interface ILayoutState {
  isOpen: boolean;
}

const initialState: ILayoutState = {
  isOpen: false,
};

export default (state = initialState, { type }: IAction<TYPES>) => {
  switch (type) {
    case TYPES.TOGGLE_MODAL:
      return { ...state, isOpen: !state.isOpen };

    default:
      return { ...state };
  }
};
