import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import TodoList from './TodoList';
import * as todosServices from './services/todos.services';

const App = () => {
  const [todos, setTodos] = useState([]);

  const sendData = async () => {
    const newTodo = {
      title: 'Todos 3',
      name: 'Hamza',
      age: 30,
      machineName: 'Todos',
    };
    try {
      await todosServices.createTodos(newTodo);
      console.log('Todo sent successfully:', newTodo);
      await fetchTodos('Todos');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const fetchTodos = async (machineName: string) => {
    try {
      const fetchedTodos = await todosServices.getTodos(machineName);
      console.log('Fetched todos:', fetchedTodos); // Log the fetched todos
      setTodos(fetchedTodos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    fetchTodos('Todos');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to React Native App</Text>

      <Button
        title="Add todo"
        onPress={() => {
          sendData();
        }}
      />
      {/* <text className="container">{JSON.stringify(todos, null, 2)}</text> */}

      <TodoList todos={todos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;
