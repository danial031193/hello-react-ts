import React, { FC, useEffect } from 'react';
import { IPostsStateToProps, IPostsDispatchToProps } from '@pages/posts/index.props';
import Post from '@components/post';
import { TestService } from '../../services/TestService';
import { PostsService } from '../../services/PostsService';

type IPosts = IPostsStateToProps & IPostsDispatchToProps;

const Posts: FC<IPosts> = ({ posts, error, loading, getPosts }) => {
  useEffect(() => getPosts(), [getPosts]);

  useEffect(() => {
    const test = TestService.getInstance().get();
    console.log({ test });
  }, []);

  const postsService = new PostsService(posts);
  const postsIds = postsService.getPostsIds();

  return (
    <div>
      <h1>Posts</h1>
      <br />
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <p>Post IDs: {postsIds?.join(', ')}</p>
          {posts.map(({ userId, id, title, body }) => (
            <Post key={id} body={body} title={title} userId={userId} />
          ))}
        </>
      )}
    </div>
  );
};

export default Posts;
