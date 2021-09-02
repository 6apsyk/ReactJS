import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    value: false,
    color: 'red'
  },
  reducers: {
    changeState: (state) => {
      state.value = !state.value
    },
    changeColor: (state) => {
        
    }
  }
})


// Action creators are generated for each case reducer function
export const { changeState } = profileSlice.actions;

export default profileSlice.reducer;