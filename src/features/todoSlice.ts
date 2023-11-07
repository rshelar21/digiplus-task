import {createSlice} from "@reduxjs/toolkit";
import type { RootState } from '../store/store'

const initialState = {
    name : "",
    location : "",
    cgpa : "",
    id : ""
}

const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        setTodo : (state, action) => {
            state.name = action.payload.name;
            state.location = action.payload.location;
            state.cgpa = action.payload.cgpa;
            state.id = action.payload.id;
        },

    }
});


export const {setTodo} = todoSlice.actions;

export const selectTodo = (state : RootState) => state.todo;


export default todoSlice.reducer;