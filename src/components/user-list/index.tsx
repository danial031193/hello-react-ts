import React, { FC } from 'react';
import User from '../user';
import ComposableUser from '../composable-user';
import styles from './styles.module.scss';

const data = [
  { id: 'uniq1', name: 'Paul' },
  { id: 'uniq2', name: 'Mary' },
  { id: 'uniq3', name: 'Viktor' },
  { id: 'uniq4', name: 'Suzanna' },
  { id: 'uniq5', name: 'Peter' },
  { id: 'uniq6', name: 'Vladislav' },
  { id: 'uniq7', name: 'Anna' },
];

interface IUserList {
  id: string;
}

const UserList: FC<IUserList> = ({ id: userId }) => {
  return (
    <div className={styles.list}>
      <p>ID: {userId}</p>
      <br />
      <p>With props</p>
      {data.map(({ id, name }) => (
        <User key={id} name={name} />
      ))}
      <br />
      <p>With children</p>
      {data.map(({ id, name }) => (
        <ComposableUser key={id}>{name}</ComposableUser>
      ))}
    </div>
  );
};

export default UserList;
