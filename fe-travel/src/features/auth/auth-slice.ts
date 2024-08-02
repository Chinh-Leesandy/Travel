import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types/auth/User'

export interface UserAuthState {
  accessToken: string | null
  refreshToken: string | null
  Iuser: User | null
}
const initialState: UserAuthState = {
  accessToken: null,
  refreshToken: null,
  Iuser: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserAuthState>) => {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
      state.Iuser = action.payload.Iuser
    },
    logout: (state) => {
      state.accessToken = null
      state.refreshToken = null
      state.Iuser = null
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
