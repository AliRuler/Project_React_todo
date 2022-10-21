import { createSlice } from "@reduxjs/toolkit";
import todos from "../../data/db.js"
export const todoSlice = createSlice({
    name: "todo",
    initialState:{
        todos:todos,
    },
    reducers: {
        addTodo: (state,action) => {
            state.todos.push(action.payload);
        },
        updateTodo:  (state,action) =>{
            state.todos = state.todos.map(item => item.id === action.payload.id? action.payload:item);
        },
        removeTodo: (state,action) =>{
            state.todos = state.todos.filter(item => item.id !== action.payload);
        }
    }
});

export const {
    addTodo,
    updateTodo,
    removeTodo
} = todoSlice.actions;

export default todoSlice.reducer;