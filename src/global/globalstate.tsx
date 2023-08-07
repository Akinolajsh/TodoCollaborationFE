import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toggle: false,
    setToggle: false,
    user: "" || null
}

const globalstate = createSlice({
  name: "second",
  initialState,
  reducers: {
    signInUser: (state: any, {payload}: any) => {
        state.user = payload
    },
    LogOut: (state: any) => {
        state.user = null
    }
  }
});

export const {signInUser,LogOut} = globalstate.actions

export default globalstate.reducer