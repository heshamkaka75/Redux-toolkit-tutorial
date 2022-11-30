import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from './Cake/cakeSlice'
import userReducer from './User/userSlice'

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    user: userReducer
  }
})

export default store