import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface TokenApi {
  accessToken: string | null
}

const initialState: TokenApi = {
  accessToken: null
}

const tokenApiSlice = createSlice({
  name: 'tokenApi',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload
    }
  }
})

export const { setAccessToken } = tokenApiSlice.actions
export default tokenApiSlice.reducer
