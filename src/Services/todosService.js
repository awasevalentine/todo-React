import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "../App"


    const getTodos = createAsyncThunk(
        'todo/getAllTodos',
        async(thunkAPI)=>{
            try{
                const response =  await axios.get(`${BASE_URL}task`)
                return response.data
            }
            catch(error) {
                const message = 
                (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
                return thunkAPI.rejectWithValue(message)
            }
            
        }
    )


    const addNewTodos = createAsyncThunk(
        'todo/addNewTodos',
        async(newTodoData, thunkAPI)=>{
            try{
                const response = await axios.post(`${BASE_URL}task`, newTodoData)
                return response.data
            }
            catch(error){
                const message = 
                (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
                return thunkAPI.rejectWithValue(message)
            }
        }
    )

    const updateTodos = createAsyncThunk(
        'todo/updateTodos',
        async(updateData, thunkAPI)=>{
            const {todoId, ...rest} = updateData
            try{
                const response = await axios.patch(`${BASE_URL}task/${todoId}`, rest)
                return response.data
            }
            catch(error){
                const message =
                (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
                return thunkAPI.rejectWithValue(message)
            }
        }
    )


    const deleteTodos = createAsyncThunk(
        'todo/deleteTodos',
        async(todoId, thunkAPI)=>{
            try{
                const response = await axios.delete(`${BASE_URL}/task/${todoId}`)
                return response.data
            }
            catch(error){
                const message = 
                (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
                return thunkAPI.rejectWithValue(message)
            }
        }
    )

const TodoService = {
    getTodos,
    addNewTodos,
    updateTodos,
    deleteTodos
}

export default TodoService