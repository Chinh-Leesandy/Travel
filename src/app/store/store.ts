import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from '../../features/api/token-api-slice'
import authReducer from '../../features/auth/auth-slice'
export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
