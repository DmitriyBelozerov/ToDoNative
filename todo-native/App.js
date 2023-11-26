import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

import { Navbar } from './src/blocks/Navbar';
import { AddTodo } from './src/blocks/AddTodo';
import { Todo } from './src/blocks/Todo';

// import {styles} from './styles'

export default function App() {
  const [todos, setTodos] = React.useState([]);

  function addTodo(title) {
    setTodos([title, ...todos])
  }

  return (
    <View style={styles.container}>
      <Navbar title='ToDoApp!'></Navbar>
      <AddTodo onSubmit={addTodo}></AddTodo>

      <FlatList
        data={todos}
        renderItem={({ item }) => <Todo text={item} />
        } />

      {/* <ScrollView >
        {todos.map((todo, index) =>
          <Todo index={index} text={todo} />
        )}
      </ScrollView> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  text: {
    // color: '#000'
  }
});
