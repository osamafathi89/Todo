import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
interface TodoState {
    todos: Todo[];
}
const initialState: TodoState = {
    todos: []
}
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            }
            state.todos.push(newTodo);
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            console.log(action.payload)
            const todos = state.todos.filter(todo => todo.id !== action.payload)
            state.todos=todos;
        },
    }
});
export const {addTodo,toggleTodo,deleteTodo}=todoSlice.actions;
export default todoSlice.reducer;