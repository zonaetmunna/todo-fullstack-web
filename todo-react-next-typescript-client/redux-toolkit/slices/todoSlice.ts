import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../types';


const initialState: Todo[] = [];
  

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addtodos: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    }
  }

});

export const { addtodos: addtodo } = todoSlice.actions;
export default todoSlice.reducer;