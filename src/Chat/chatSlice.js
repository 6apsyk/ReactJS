import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'chat',
  initialState: {
    arraySlice: [],
  },
  reducers: {
    addMassage: (state,action) => {
      state.arraySlice.push(action.payload)
    },
  }
})

// export const Slicer = state => state.chat.arraySlice

// Action creators are generated for each case reducer function
export const { addMassage } = counterSlice.actions;

export default counterSlice.reducer;