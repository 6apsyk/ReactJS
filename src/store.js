import { configureStore } from '@reduxjs/toolkit'
import  counterSlicer from './Chat/chatSlice'
import profileSlice from './Profile/profileSlice'

export default configureStore({
  reducer: {
      chat : counterSlicer,
      profile: profileSlice, 
  }
})