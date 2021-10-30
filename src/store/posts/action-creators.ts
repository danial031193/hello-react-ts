import TYPES from './action-types';
import { IPostsState } from '@store/posts/reducer';

export const getPosts = () => ({
  type: TYPES.GET_POSTS,
  payload: {},
});

export const getPostsSuccess = (data: IPostsState['list']['result']) => ({
  type: TYPES.GET_POSTS_SUCCESS,
  payload: { data },
});

export const getPostsError = (message: IPostsState['list']['error']) => ({
  type: TYPES.GET_POSTS_ERROR,
  payload: { message },
});

export const getUserPosts = (id: string | number) => ({
  type: TYPES.GET_USER_POSTS,
  payload: { id },
});

export const getUserPostsSuccess = (data: IPostsState['userList']['result']) => ({
  type: TYPES.GET_USER_POSTS_SUCCESS,
  payload: { data },
});

export const getUserPostsError = (message: IPostsState['userList']['error']) => ({
  type: TYPES.GET_USER_POSTS_ERROR,
  payload: { message },
});
