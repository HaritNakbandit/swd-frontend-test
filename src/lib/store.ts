import { configureStore } from '@reduxjs/toolkit'
import test2Slice from './features/test2/test2Slice'

export const store = configureStore({
    reducer: {
      test2: test2Slice,
    },
  })
  

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch