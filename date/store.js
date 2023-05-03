import { configureStore } from '@reduxjs/toolkit'
import redus  from './slisc'
export const store = configureStore({
  reducer:{
    one : redus
  }
})

export default store