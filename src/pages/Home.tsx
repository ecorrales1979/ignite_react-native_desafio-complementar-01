import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import { useTheme } from '../styles';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.palette.background,
      flexGrow: 1,
    }
  })

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle !== '') {
      const task: Task = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      };

      setTasks(oldState => [...oldState, task]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks(oldState => oldState.map(item => {
      if (item.id === id) item.done = !item.done;
      return item;
    }));
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(item => item.id !== id));
  }

  return (
    <View style={styles.container}>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </View>
  )
}
