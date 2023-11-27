import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';

import { Navbar } from './src/blocks/Navbar';
import { AddTodo } from './src/blocks/AddTodo';
import { Todo } from './src/blocks/Todo';
import { Footer } from './src/blocks/Footer';

// import {styles} from './styles'

export default function App() {
  const [todos, setTodos] = React.useState([]);

  function addTodo(title) {
    setTodos([
      {
        id: Date.now().toString(),
        title
      },
      ...todos])
  }



  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View style={styles.container}>

      <View style={styles.main}>
        <Navbar title='ToDoApp!'></Navbar>
        <AddTodo onSubmit={addTodo}></AddTodo>

        <FlatList
          data={todos}
          renderItem={({ item }) => <Todo item={item} onRemove={removeTodo} />
          } />
      </View>

      <Footer></Footer>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',

  },
  text: {
    // color: '#000'
  },
  main: {

  }
});
