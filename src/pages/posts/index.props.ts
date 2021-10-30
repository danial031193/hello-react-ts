import { getPosts } from '@store/posts/action-creators';
import IState from '@interfaces/redux/IState';
import { ReplacePropertiesReturnType } from '@interfaces/common';

const mapStateToProps = (state: IState) =>
  ({
    posts: state.posts.list.result,
    loading: state.posts.list.fetching,
    error: state.posts.list.error,
  } as const);

const mapDispatchToProps = {
  getPosts,
};

export type IPostsStateToProps = ReturnType<typeof mapStateToProps>;
export type IPostsDispatchToProps = ReplacePropertiesReturnType<typeof mapDispatchToProps, void>;

export { mapStateToProps, mapDispatchToProps };
