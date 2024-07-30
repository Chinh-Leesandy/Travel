import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types/auth/User'

export interface UserAuthState {
  accessToken: string | null
  refreshToken: string | null
  user: User | null
}
const initialState: UserAuthState = {
  accessToken: null,
  refreshToken: null,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ isToken: string; refreshToken: string; user: User }>) => {
      state.accessToken = action.payload.isToken
      state.refreshToken = action.payload.refreshToken
      state.user = action.payload.user
    },
    logout: (state) => {
      state.accessToken = null
      state.refreshToken = null
      state.user = null
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
