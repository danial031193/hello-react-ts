import { getUserPosts } from '@store/posts/action-creators';
import { ReplacePropertiesReturnType } from '@interfaces/common';
import IState from '@interfaces/redux/IState';

const mapStateToProps = (state: IState) => ({
  posts: state.posts.userList.result,
});

const mapDispatchToProps = {
  getUserPosts,
};

export type IUserStateToProps = ReturnType<typeof mapStateToProps>;
export type IUserDispatchToProps = ReplacePropertiesReturnType<typeof mapDispatchToProps, void>;

export { mapStateToProps, mapDispatchToProps };
