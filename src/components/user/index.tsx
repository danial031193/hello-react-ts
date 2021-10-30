import React, { FC } from 'react';
import styles from './styles.module.scss';

interface IUser {
  name: string;
}

const User: FC<IUser> = ({ name }) => {
  const getName = () => {
    return name.length > 5 ? `${name.slice(0, 5)}...` : name;
  };

  const getText = () => {
    if (name.indexOf('e') >= 1) {
      return `It’s Premium User! Welcome, ${getName()}!`;
    }

    return `It’s user ${getName()}`;
  };

  const isPalindrome = name.split('').reverse().join('').toLowerCase() === name.toLowerCase();

  return <span className={isPalindrome ? styles.highlighted : ''}>{getText()}</span>;
};

export default React.memo(User);
