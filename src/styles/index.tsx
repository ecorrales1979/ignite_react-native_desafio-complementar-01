import React, { createContext, useCallback, useState, useContext } from 'react';

import { light, dark, PaletteProps } from './themes';

type ThemeName = 'light' | 'dark';

interface ThemeProps {
  name: ThemeName;
  palette: PaletteProps;
}

interface ThemeModeProps {
  theme: ThemeProps;
  toggleTheme(): void;
}

const lightTheme: ThemeProps = {
  name: 'light',
  palette: light,
};

const darkTheme: ThemeProps = {
  name: 'dark',
  palette: dark,
};

const initialTheme = lightTheme;

const ThemeContext = createContext<ThemeModeProps>({} as ThemeModeProps);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeProps>(initialTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme.name === 'dark' ? lightTheme : darkTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
};

export const useTheme = (): ThemeModeProps => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme deve ser usado com o ThemeProvider')
  }

  return context;
};
