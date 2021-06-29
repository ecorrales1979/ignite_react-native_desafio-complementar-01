import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import { useTheme } from '../styles';

export function Header() {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    header: {
      paddingTop: StatusBar.currentHeight,
      paddingBottom: 44,
      backgroundColor: theme.palette.primary,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    headerText: {
      fontSize: 24,
      color: theme.palette.contrastText,
      fontFamily: 'Poppins-Regular',
    }
  });

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
    </View>
  )
}
