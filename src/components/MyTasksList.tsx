import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

import { useTheme } from '../styles';

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    header: {
      color: theme.palette.text,
      fontSize: 24,
      fontFamily: 'Poppins-SemiBold'
    },
    headerContainer: {
      marginHorizontal: 24,
      marginTop: 32
    },
    taskButton: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarker: {
      height: 16,
      width: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.palette.markerColor,
      marginRight: 10
    },
    taskText: {
      color: theme.palette.text,
    },
    taskButtonDone: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      backgroundColor: theme.palette.contrastBg,
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarkerDone: {
      height: 16,
      width: 16,
      borderRadius: 8,
      backgroundColor: theme.palette.markerFilledColor,
      marginRight: 10
    },
    taskTextDone: {
      color: theme.palette.inputText,
      textDecorationLine: 'line-through'
    }
})

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Minhas tasks</Text>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              testID={`button-${index}`}
              activeOpacity={0.7}
              onPress={() => onPress(item.id)}
              onLongPress={() => onLongPress(item.id)}
              style={item.done ? styles.taskButtonDone : styles.taskButton}
            >
              <View
                testID={`marker-${index}`}
                style={item.done ? styles.taskMarkerDone : styles.taskMarker}
              />
              <Text
                style={item.done ? styles.taskTextDone : styles.taskText}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )
        }}
        // ListHeaderComponent={<FlatListHeaderComponent />}
        // ListHeaderComponentStyle={{
        //   marginBottom: 20
        // }}
        style={{
          marginHorizontal: 24,
          marginTop: 10
        }}
      />
    </>
  )
}
