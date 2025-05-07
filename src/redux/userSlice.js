// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
