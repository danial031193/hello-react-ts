import { updateUsersList } from '@store/users/action-creators';
import { put, select, takeLatest } from 'redux-saga/effects';
import TYPES from '@store/users/action-types';
import { SagaIterator } from 'redux-saga';
import { IAction } from '@interfaces/redux/IAction';

/**
 * Create new user and add him to list
 */
function* createUser(): SagaIterator {
  const newUser = yield select((state) => state.users.newUser);
  const list = yield select((state) => state.users.list);

  const userId = list[list.length - 1].id + 1;
  const newList = [...list, { id: userId, ...newUser }];

  yield put(updateUsersList(newList));
}

/**
 * Delete user from list
 *
 * @param {number} id
 */
function* deleteUser({ payload: { id } }: IAction<TYPES>): SagaIterator {
  const accountId = yield select((state) => state.account.id);

  if (id === accountId) {
    alert("You can't delete yourself");
    return;
  }

  const list = yield select((state) => state.users.list);

  const newList = list.filter((user: any) => user.id !== id);

  yield put(updateUsersList(newList));
}

export default [takeLatest(TYPES.ADD_USER, createUser), takeLatest(TYPES.REMOVE_USER, deleteUser)];
