import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload)
    },
    remove: (state, action) => {
      const index = state.value.findIndex(item => item === action.payload)
      state.value.splice(index, 1)
    }
  },
})

export const { add, remove } = todoSlice.actions

export default todoSlice.reducer