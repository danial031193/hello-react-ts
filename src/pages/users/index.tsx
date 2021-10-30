import React, { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CreateUserForm } from '@components/index';
import { IUsersStateToProps, IUsersDispatchToProps } from '@pages/users/index.props';
import styles from './styles.module.scss';

type IUsers = IUsersStateToProps & IUsersDispatchToProps;

const Users: FC<IUsers> = ({ users, removeUser, accountId }) => {
  const deleteUser = useCallback((id) => removeUser(id), [removeUser]);

  return (
    <div>
      <h1>Users</h1>

      <h3>Create New</h3>
      <CreateUserForm />

      <h3>Users List</h3>
      {users.map((user) => {
        return (
          <div key={user.id} className={styles.row}>
            <Link
              to={`/user/${user.id}`}
              className={[styles.link, user.id === accountId ? styles.red : ''].join(' ')}
            >
              {user.username}
            </Link>
            <button onClick={() => deleteUser(user.id)}>Delete user</button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
