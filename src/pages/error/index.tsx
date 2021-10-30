import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import styles from './styles.module.css';

const ErrorPage = () => {
  const { pathname } = useLocation();

  if (pathname === '/form') {
    return <Redirect to="/forms" />;
  }

  if (pathname === '/user') {
    return <Redirect to="/user/name/id" />;
  }

  return <div className={styles.container}>404</div>;
};

export default ErrorPage;
