import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the user object
type userData = {
  id: string;
  name: string;
  email: string;
  api_key: string;
  subscription: string;
};
type User = {
  token: string;
  userData: userData;
};

// Define the initial state type
type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
};

// Define the initial state
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
