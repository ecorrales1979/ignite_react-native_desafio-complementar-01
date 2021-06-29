import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { useTheme } from '../styles'

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={toggleTheme}
    >
      <Icon name={theme.name === 'dark' ? 'sun' : 'moon'} size={20} color="#fff" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 0,
    padding: 0,
    borderRadius: 500,
    position: 'absolute',
    top: 30,
    right: 20,
    overflow: 'hidden',
  },
  icon: {
    width: 25,
    height: 25,
  }
});
