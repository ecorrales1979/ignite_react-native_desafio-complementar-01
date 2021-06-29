import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';
import { useTheme } from '../styles';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    inputContainer: {
      backgroundColor: theme.palette.inputBg,
      borderRadius: 5,
      marginTop: -25,
      marginHorizontal: 40,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      backgroundColor: theme.palette.inputBg,
      paddingLeft: 12,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      color: theme.palette.inputText,
    },
    inputIOSShadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84
    },
    inputAndroidShadow: {
      elevation: 5
    },
    addButton: {
      backgroundColor: theme.palette.buttonBg,
      height: 50,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
  });

  function handleAddNewTask() {
    if (task) {
      addTask(task)
      setTask('');
    }
  }

  return (
    <View style={[styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput
        style={styles.input}
        placeholder="Adicionar novo todo..."
        placeholderTextColor={theme.palette.inputText}
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}
