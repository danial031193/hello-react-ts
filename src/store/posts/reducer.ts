import TYPES from './action-types';
import { IAction } from '@interfaces/redux/IAction';
import IReducerState from '@interfaces/redux/IReducerState';
import { IPost } from '@interfaces/post/i-post';

export interface IPostsState {
  list: IReducerState<IPost[]>;
  userList: IReducerState<IPost[]>;
}

const initialState: IPostsState = {
  list: {
    result: [],
    error: null,
    fetching: false,
  },
  userList: {
    result: [],
    error: null,
    fetching: false,
  },
};

export default (state = initialState, { type, payload }: IAction<TYPES>): IPostsState => {
  switch (type) {
    case TYPES.GET_POSTS:
      return { ...state, list: { ...state.list, fetching: true, error: null } };

    case TYPES.GET_POSTS_SUCCESS:
      return { ...state, list: { ...state.list, fetching: false, result: payload.data } };

    case TYPES.GET_POSTS_ERROR:
      return { ...state, list: { ...state.list, fetching: false, error: payload.message } };

    case TYPES.GET_USER_POSTS:
      return { ...state, userList: { ...state.userList, fetching: true, error: null } };

    case TYPES.GET_USER_POSTS_SUCCESS:
      return { ...state, userList: { ...state.userList, fetching: false, result: payload.data } };

    case TYPES.GET_USER_POSTS_ERROR:
      return { ...state, userList: { ...state.userList, fetching: false, error: payload.message } };

    default:
      return { ...state };
  }
};
