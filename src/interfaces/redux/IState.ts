import { IAccountState } from '@store/account/reducer';
import { IUsersState } from '@store/users/reducer';
import { ILayoutState } from '@store/layout/reducer';
import { IPostsState } from '@store/posts/reducer';

export default interface IState {
  account: IAccountState;
  users: IUsersState;
  layout: ILayoutState;
  posts: IPostsState;
}
