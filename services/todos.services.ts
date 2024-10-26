// firebase.services.ts
// Function to write data
import {ref, set, get} from 'firebase/database';
import {db} from '../config/firebase.config';

interface TodoData {
  title: string;
  name: string;
  age: number;
  machineName: string;
}

export const createTodos = async (data: TodoData) => {
  try {
    const todosRef = ref(db, `machines/${data.machineName}`); // Point to the Todos path

    // Use set to replace or add the todos array
    const snapshot = await get(todosRef); // Get the current todos
    const currentTodos = snapshot.exists() ? snapshot.val() : []; // Check if it exists

    // Append the new todo to the current todos
    const updatedTodos = [...currentTodos, {...data}];

    // Update the database with the new array
    return await set(todosRef, updatedTodos);
  } catch (error: any) {
    throw new Error(
      error.message || 'An error occurred while adding breakdown cause.',
    );
  }
};

export const getTodos = async (machineName: string) => {
  try {
    const todosRef = ref(db, `machines/${machineName}`); // Reference to the Todos path
    const snapshot = await get(todosRef); // Get the current todos

    // Return the todos or an empty array if not found
    return snapshot.exists() ? snapshot.val() : [];
  } catch (error: any) {
    console.error('Error fetching todos:', error.message);
    throw new Error(error.message || 'An error occurred while fetching todos.');
  }
};
