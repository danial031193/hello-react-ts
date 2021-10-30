import React, { FC } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { CreateUserForm } from '@components/index';
import { IRegisterStateToProps } from '@pages/register/index.props';
import styles from './styles.module.scss';

const Register: FC<IRegisterStateToProps> = ({ accountId }) => {
  if (accountId) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <CreateUserForm />
      <Link to="/login" className={styles.link}>
        Login
      </Link>
    </>
  );
};

export default Register;
