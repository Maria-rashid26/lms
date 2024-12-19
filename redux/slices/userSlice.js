// redux/slices/userSlice.js

import { auth } from "@/config/firebaseConfig";
import { RegisterType, UserRole } from "@/constants/UserConstants";
import { getCustomErrorMessage } from "@/lib/firebaseErrors";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";
export const loginUser = createAsyncThunk(
  "login",
  async ({ email, password }) => {
    try {
      const emailPasswordResponse = await axios.post(
        "http://localhost:5000/api/v1/checkuserlogin",
        {
          email,
          loggedInType: RegisterType.EMAIL_PASSWORD,
        }
      );

      if (emailPasswordResponse.data.success) {
        console.log("asdasdas");
      }

      const firebaseResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const idToken = await firebaseResponse.user.getIdToken();
      const response = await axios.post(
        "http://localhost:5000/api/v1/login",
        {
          idToken,
        },
        {
          withCredentials: true, // Ensure cookies (including firebaseToken) are sent
        }
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      if (error?.response?.data?.message) {
        throw new Error(error?.response?.data?.message);
      } else if (error.code) {
        const message = getCustomErrorMessage(error.code, error.message);
        throw new Error(message);
      } else {
        throw new Error(error.message);
      }
    }
  }
);
export const loginUserWithGoogle = createAsyncThunk(
  "login/google",
  async (token) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/social-login",
        {
          idToken: token,
          role: 0,
          loggedInType: RegisterType.GOOGLE,
        },
        {
          withCredentials: true, // Ensure cookies (including firebaseToken) are sent
        }
      );

      console.log(response);
      return response.data;
    } catch (error) {
      if (error?.response?.data?.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error(`Error Login user: , ${error.message}`);
      }
    }
  }
);

export const signUpWithGoogle = createAsyncThunk(
  "signup/google",
  async (token) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/social-login",
        {
          idToken: token,
          role: 0,
          registerType: RegisterType.GOOGLE,
          loggedInType: RegisterType.GOOGLE,
        },
        {
          withCredentials: true, // Ensure cookies (including firebaseToken) are sent
        }
      );

      console.log(response);
      return response.data;
    } catch (error) {
      if (error?.response?.data?.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error(`Error Login user: , ${error.message}`);
      }
    }
  }
);

export const signUpWithEmailAndPassword = createAsyncThunk(
  "signup/email-password",
  async (firstName, lastName, email, password, role) => {
    try {
    } catch (error) {}
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    isAuthenticated: false,
    user: null,
    error: null,
  },
  reducers: {
    clearError(state) {
      state.error = null;
      state.loading = false;
    },
    setLoginUser(state, action) {
      state.isAuthenticated = true;
      state.error = null;
      state.loading = false;
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.data;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.error.message;
    });
    builder.addCase(loginUserWithGoogle.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUserWithGoogle.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.data;
      state.error = null;
    });
    builder.addCase(loginUserWithGoogle.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.error.message;
    });
    builder.addCase(signUpWithGoogle.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signUpWithGoogle.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.data;
      state.error = null;
    });
    builder.addCase(signUpWithGoogle.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.error.message;
    });
  },
});

export const { clearError, setLoginUser } = userSlice.actions;
export default userSlice.reducer;
