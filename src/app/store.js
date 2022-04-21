import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from '../Redux/todoSlice'


export const store = configureStore({
    reducer: {
        todos: TodosReducer
    }
})