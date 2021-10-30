import React, { FC } from 'react';
import styles from './styles.module.scss';

interface IComposableUser {
  children: string;
}

const ComposableUser: FC<IComposableUser> = ({ children }) => {
  const getName = () => {
    return children.length > 5 ? `${children.slice(0, 5)}...` : children;
  };

  const getText = () => {
    if (children.indexOf('e') >= 1) {
      return `It’s Premium User! Welcome, ${getName()}!`;
    }

    return `It’s user ${getName()}`;
  };

  const isPalindrome =
    children.split('').reverse().join('').toLowerCase() === children.toLowerCase();

  return <span className={isPalindrome ? styles.highlighted : ''}>{getText()}</span>;
};

export default React.memo(ComposableUser);
