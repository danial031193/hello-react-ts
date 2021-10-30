import { call, fork, delay, put, select, take, race, takeLatest } from 'redux-saga/effects';
import {
  getPostsError,
  getPostsSuccess,
  getUserPostsError,
  getUserPostsSuccess,
} from './action-creators';
import TYPES from './action-types';
import { fetchPosts } from './api';
import { SagaIterator } from 'redux-saga';
import { IAction } from '@interfaces/redux/IAction';

function* getPosts(): SagaIterator {
  const currentPosts = yield select((state) => state.posts.list.result);
  console.log({ currentPosts });

  try {
    const posts = yield call(fetchPosts);

    yield delay(500);

    yield put(getPostsSuccess(posts));
  } catch (e) {
    yield put(getPostsError((e as any)?.message));
  }
}

function* getUserPosts({ payload: { id } }: IAction<TYPES>): SagaIterator {
  try {
    const posts = yield call(fetchPosts, id);
    yield put(getUserPostsSuccess(posts));
  } catch (e) {
    yield put(getUserPostsError((e as any)?.message));
  }
}

function* postsSuccessWatcher() {
  while (true) {
    yield take(TYPES.GET_POSTS_SUCCESS);

    console.log('Success');
  }
}

function* raceWatcher(): SagaIterator {
  let i = 0;

  while (true) {
    const result = yield race({
      success: take(TYPES.GET_POSTS_SUCCESS),
      error: take(TYPES.GET_POSTS_ERROR),
    });

    const actionKey = Object.keys(result)[0];

    if (actionKey === 'success') {
      i += 1;
    }

    if (actionKey === 'error') {
      i -= 1;
    }

    console.log({ i });
  }
}

export default [
  takeLatest(TYPES.GET_POSTS, getPosts),
  takeLatest(TYPES.GET_USER_POSTS, getUserPosts),
  fork(postsSuccessWatcher),
  fork(raceWatcher),
];
