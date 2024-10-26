// TodoList.tsx
import React from 'react';
import {View, Text, FlatList} from 'react-native';
interface Todos {
  title: string;
  name: string;
  age: number;
}

interface TodoListProps {
  todos: Todos[];
}

const TodoList: React.FC<TodoListProps> = ({todos}) => {
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => `${index}`} // or use a unique id if available
        renderItem={({item}) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Age: {item.age}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default TodoList;
