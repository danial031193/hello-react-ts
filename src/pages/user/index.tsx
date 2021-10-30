import Post from '@components/post';
import React, { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import UserItem from './item/index.store';
import { IUserStateToProps, IUserDispatchToProps } from '@pages/user/index.props';

type IUser = IUserStateToProps & IUserDispatchToProps;

const User: FC<IUser> = ({ getUserPosts, posts }) => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => getUserPosts(id), [getUserPosts, id]);

  return (
    <div>
      <Link
        to={{
          pathname: '/forms',
          search: '?sort=name',
          hash: '#the-hash',
          state: { from: 'User' },
        }}
      >
        Link with object prop
      </Link>
      <br />

      {posts.map(({ userId, id: pId, title, body }) => (
        <Post key={pId} body={body} title={title} userId={userId} />
      ))}

      <UserItem id={Number(id)} />
    </div>
  );
};

export default User;
