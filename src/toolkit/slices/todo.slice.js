import { createSlice } from "@reduxjs/toolkit";
import todos from "../../data/db.js"
export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: todos,
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== +action.payload.id);
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload);
        },
        doneTodo: (state,action) => {
            state.todos = state.todos.map(item => item.id === action.payload.id ? { ...item, isDone: !item.isDone } : item);
        }
    }
});

export const {
    addTodo,
    updateTodo,
    removeTodo,
    doneTodo
} = todoSlice.actions;

export default todoSlice.reducer;