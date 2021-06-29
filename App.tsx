import React from 'react';
import { StatusBar } from 'react-native';

import { Home } from './src/pages/Home';
import { ThemeSwitcher } from './src/components/ThemeSwitcher';
import { ThemeProvider } from './src/styles';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <ThemeProvider>
        <Home />
        <ThemeSwitcher />
      </ThemeProvider>
    </>
  );
}
