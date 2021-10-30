import React, { FC, useEffect } from 'react';
import { IPostsStateToProps, IPostsDispatchToProps } from '@pages/posts/index.props';
import Post from '@components/post';

type IPosts = IPostsStateToProps & IPostsDispatchToProps;

const Posts: FC<IPosts> = ({ posts, error, loading, getPosts }) => {
  useEffect(() => getPosts(), [getPosts]);

  return (
    <div>
      <h1>Posts</h1>
      <br />
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        posts.map(({ userId, id, title, body }) => (
          <Post key={id} body={body} title={title} userId={userId} />
        ))
      )}
    </div>
  );
};

export default Posts;
