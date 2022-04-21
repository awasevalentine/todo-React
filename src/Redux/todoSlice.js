import { createSlice } from "@reduxjs/toolkit"
import TodoService from "../Services/todosService"



const {getTodos, addNewTodos, updateTodos, deleteTodos} = TodoService
const initialState = {
    todos: [],
    status: 'idle',
    error: null,
    addStatus: 'idle',
    updateStatus: 'idle',
    deleteStatus: 'idle'
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        reset(state){
            state.error = null;
            state.status = 'idle'
            state.addStatus = 'idle'
            state.updateStatus = 'idle'
            state.deleteStatus = 'idle'
        }
    },
    extraReducers(builder){
        builder
        /* Reducer for fetching all TODO from the service */
        .addCase(getTodos.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(getTodos.fulfilled, (state, action)=>{
            state.status = 'success';
            state.todos = action.payload;
        })
        .addCase(getTodos.rejected,(state,action)=>{
            state.status = 'failed';
            state.error = action.payload
        }) /* End of todo fetching and pushing into the todos array */

        /* Reducer for posting new Todos into the database */
        .addCase(addNewTodos.pending, (state)=>{
            state.addStatus = 'loading'
        })
        .addCase(addNewTodos.fulfilled, (state,action)=>{
            state.addStatus = 'success';
            state.todos = action.payload
        })
        .addCase(addNewTodos.rejected, (state,action)=>{
            state.addStatus = 'failed';
            state.error = action.payload
        }) /* End of Reducer for adding new todos to the DB */
        
        /*Reducer for updating any of the existing todos */
        .addCase(updateTodos.pending, (state)=>{
            state.updateStatus = 'loading'
        })
        .addCase(updateTodos.fulfilled,(state,action)=>{
            state.updateStatus = 'success';
            // state.todos = action.payload
        })
        .addCase(updateTodos.rejected,(state,action)=>{
            state.updateStatus = 'failed';
            state.error = action.payload
        }) /* End of Reducer for updating any of the existing todo

        /* Reducer for deleting any existing data from the store and DB */
        .addCase(deleteTodos.pending, (state)=>{
            state.deleteStatus = 'loading'
        })
        .addCase(deleteTodos.fulfilled,(state,action)=>{
            state.deleteStatus = 'success'
        })
        .addCase(deleteTodos.rejected, (state,action)=>{
            state.deleteStatus = 'failed';
            state.error = action.payload
        }) /* End of Reducer for deleting todos */
    }
})

export const { reset } = todosSlice.actions

export default todosSlice.reducer