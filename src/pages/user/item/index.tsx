import React, { FC } from 'react';

export interface IUserItem {
  id: number;
  username?: string;
}

const UserItem: FC<IUserItem> = ({ id, username }) => {
  return (
    <div>
      <p>id: {id}</p>
      <p>username: {username}</p>
    </div>
  );
};

export default UserItem;
