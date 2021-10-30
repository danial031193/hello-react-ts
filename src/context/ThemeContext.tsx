import React, { FC, useCallback, useMemo, useState } from 'react';

interface IThemeContext {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const initState: IThemeContext = {
  theme: 'light',
  toggleTheme: () => null,
};

const ThemeContext = React.createContext<IThemeContext>(initState);

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => setTheme(theme === 'light' ? 'dark' : 'light'), [theme]);

  const themeContextValue: IThemeContext = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  );

  return <ThemeContext.Provider value={themeContextValue} children={children} />;
};

export default ThemeContext;
