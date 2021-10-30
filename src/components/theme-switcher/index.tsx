import React, { FC, useContext } from 'react';
import ThemeContext from '@context/ThemeContext';
import styles from './styles.module.scss';

const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={[styles.button, styles[theme]].join(' ')}>
      Current theme: {theme}
    </button>
  );
};

export default ThemeSwitcher;
