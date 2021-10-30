import { all } from 'redux-saga/effects';
import PostsSagas from './posts/sagas';
import UsersSagas from './users/sagas';

function* SagaManager() {
  yield all(PostsSagas);
  yield all(UsersSagas);
}

export default SagaManager;
