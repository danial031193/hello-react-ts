import React, { FC } from 'react';

export interface IPost {
  userId: number;
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
