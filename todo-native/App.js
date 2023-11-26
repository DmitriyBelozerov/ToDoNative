import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { Navbar } from './src/blocks/Navbar';
import { AddTodo } from './src/blocks/InputTodo';

// import {styles} from './styles'

export default function App() {
  const [todos, setTodos] = React.useState([]);

function addTodo(title) {
  setTodos ([...todos, title])
}

  return (
    <View style={styles.container}>
      <Navbar title='ToDoApp!'></Navbar>
      <AddTodo onSubmit={addTodo}></AddTodo>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});
