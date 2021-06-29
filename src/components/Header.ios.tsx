import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import { useTheme } from '../styles'

export function Header() {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.palette.primary,
    },
    header: {
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
    </SafeAreaView>
  )
}
