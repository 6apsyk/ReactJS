import { createSlice } from "@reduxjs/toolkit";
// import moment from "moment";

export const wheatherSlice = createSlice({
  name: "wheather",
  initialState: {
      loading : false,
      error : false,
      data : null 
  },
  reducers: {
    setWheather: (state, action) => {
      state.data = action.payload
    },
    setError : (state, action) => {
        state.error = action.payload
    },
    setLoading : (state, action) => {
        state.loading = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setWheather, setError, setLoading } = wheatherSlice.actions;

export default wheatherSlice.reducer;
