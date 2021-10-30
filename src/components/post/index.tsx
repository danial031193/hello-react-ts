import React, { FC } from 'react';

interface IPost {
  userId: string;
  title: string;
  body: string;
}

const Post: FC<IPost> = ({ userId, title, body }) => {
  return (
    <ul>
      <li>User ID: {userId}</li>
      <li>Title: {title}</li>
      <li>Description: {body}</li>
    </ul>
  );
};

export default Post;
