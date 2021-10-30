import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout as logoutAction } from '@store/account/action-creators';
import { links } from './data';
import styles from './styles.module.scss';

const Navbar: FC = () => {
  const dispatch = useDispatch();

  const logout = () => dispatch(logoutAction());

  return (
    <div className={styles.navbar}>
      {links.map(({ to, title, exact }) => (
        <NavLink
          key={to}
          to={to}
          exact={exact}
          className={styles.link}
          activeClassName={styles.active}
        >
          {title}
        </NavLink>
      ))}
      <div className={styles.link} onClick={logout}>
        Logout
      </div>
    </div>
  );
};

export default Navbar;
