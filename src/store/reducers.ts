import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AccountReducer from './account/reducer';
import UsersReducer from './users/reducer';
import PostsReducer from './posts/reducer';
import LayoutReducer from './layout/reducer';

const allReducers = {
  account: persistReducer({ key: 'account', storage, whitelist: ['id'] }, AccountReducer),
  users: persistReducer({ key: 'users', storage, whitelist: ['list'] }, UsersReducer),
  posts: PostsReducer,
  layout: LayoutReducer,
};

export default allReducers;
