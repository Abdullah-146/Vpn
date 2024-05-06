import { createSlice } from "@reduxjs/toolkit";
import { get, remove, save } from "../../reuseable";
import {
  cancelAcc,
  getRefferalStats,
  getUserById,
  getUserProfile,
  getUserRemainingTime,
  googleAuth,
  registerUser,
  resetPassword,
  updateUserPassword,
  updateUserProfile,
  updateUserRemainingTime,
  userLogin,
  confirmResetPassword,
  resendOtp,
} from "./userAction";

const initialState = {
  loading: false,
  userInfo: {},
  remainingTime: 0,
  refferalStats: null,
  accessToken: null,
  error: null,
  language: "en",
  vpnConnected: false,
  connectionTime: 0,
};

const authSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      remove("accessToken");
      // remove("refreshToken");
      return initialState;
    },

    setRemainingTime: (state, { payload }) => {
      state.remainingTime = payload;
    },
    subtractRemainingTime: (state, { payload }) => {
      state.remainingTime = state.remainingTime - payload;
    },
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
    setVpnConnected: (state, { payload }) => {
      state.vpnConnected = payload;
    },
    updateUser: (state, { payload }) => {
      state.userInfo = { ...state.userInfo, ...payload };
    },
    updateConnectionTime: (state, { payload }) => {
      state.connectionTime = state.connectionTime + payload;
      save("connectionTime", state.connectionTime.toString());
    },
    setConnectionTime: (state, { payload }) => {
      state.connectionTime = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.accessToken = payload.accessToken;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.accessToken = payload.accessToken;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, { payload }) => {
        console.log("User Profile payload : ", payload);
        state.loading = false;
        state.userInfo = payload;
      })
      .addCase(getUserProfile.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserById.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getUserById.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
        state.loading = false;
        state.userInfo = { ...state.userInfo, ...payload };
      })
      .addCase(updateUserProfile.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateUserPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserPassword.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updateUserPassword.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(resendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resendOtp.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(resendOtp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(confirmResetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(confirmResetPassword.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(confirmResetPassword.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(googleAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleAuth.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload.data.user;
        state.accessToken = payload.data.accessToken;
      })
      .addCase(googleAuth.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getUserRemainingTime.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserRemainingTime.fulfilled, (state, { payload }) => {
        state.loading = false;
        //keeping track of remaining time in seconds
        state.remainingTime = payload.time * 60;
      })
      .addCase(getUserRemainingTime.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateUserRemainingTime.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserRemainingTime.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.remainingTime = payload.time * 60;
      })
      .addCase(updateUserRemainingTime.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(cancelAcc.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(cancelAcc.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(cancelAcc.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getRefferalStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRefferalStats.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.refferalStats = payload;
      })
      .addCase(getRefferalStats.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const {
  logout,
  setRemainingTime,
  subtractRemainingTime,
  setLanguage,
  setVpnConnected,
  updateUser,
  updateConnectionTime,
  setConnectionTime,
} = authSlice.actions;

export default authSlice.reducer;
