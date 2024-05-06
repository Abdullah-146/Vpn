import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../api/axios";
import { errorHandler } from "../../errorHanlder";
import { save } from "../../reuseable";

export const userLogin = createAsyncThunk(
  "/auth/login-via-email",
  async ({ email, password, device }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/login-via-email", {
        email,
        password,
        device,
      });

      if (data) {
        save("accessToken", data.accessToken);
        save("refreshToken", data.refreshToken);
        save("persistedToken", data.accessToken);
        save(
          "user",
          JSON.stringify({
            email: data.email,
            name: data.name,
            _id: data.id,
          })
        );
      }
      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/signup",
  async ({ email, password, name, reference, device }, { rejectWithValue }) => {
    try {
      //* Add Refernce to the request body if it is not empty
      let additonalData = {};
      if (reference !== "" && reference !== undefined && reference !== null) {
        additonalData.reference = reference;
      }

      const { data } = await axios.post("/user", {
        ...additonalData,
        email,
        password,
        name,
        device,
      });

      save("accessToken", data.accessToken);
      save("refreshToken", data.refreshToken);
      save("persistedToken", data.accessToken);
      save(
        "user",
        JSON.stringify({
          email,
          name,
          _id: data._id,
        })
      );

      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "user/profile/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/user");

      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/profile/update",
  async ({ reqData, id }, { rejectWithValue }) => {
    try {
      //* reqData can have any of the following properties: name, avatar, age

      const { data } = await axios.patch(`/user/${id}`, reqData);

      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);
export const updateUserProfilePicture = createAsyncThunk(
  "user/profile/update",
  async ({ reqData, id }, { rejectWithValue }) => {
    try {
      //* reqData can have any of the following properties: name, avatar, age

      const { data } = await axios.patch(`/user/${id}`, reqData);

      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/user/initiate-reset-password/${email}`
      );

      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);

export const resendOtp = createAsyncThunk(
  "user/resendOtp",
  async ({ email }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/user/resend-otp/${email}`);
      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);

export const confirmResetPassword = createAsyncThunk(
  "user/confirmResetPassword",
  async ({ email, otp, newPassword }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/user/confirm-reset-password", {
        email,
        otp,
        newPassword,
      });

      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);

export const updateUserPassword = createAsyncThunk(
  "user/updatePassword",
  async (
    { currentPassword, newPassword, confirmPassword, userId },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.patch(`/user/${userId}/password`, {
        currentPassword,
        newPassword,
        confirmPassword,
      });

      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);

export const getUserById = createAsyncThunk(
  "user/getById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/user/otherUser/${id}`);

      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);

export const googleAuth = createAsyncThunk(
  "auth/google",
  async (reqData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/google", reqData);

      save("accessToken", data.data.accessToken);
      save("refreshToken", data.data.refreshToken);
      save("user", JSON.stringify(data.data.user));

      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);

export const getUserRemainingTime = createAsyncThunk(
  "user/time/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/user/time");
      console.log(data);
      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);

export const updateUserRemainingTime = createAsyncThunk(
  "user/time/update",
  async ({ time }, { rejectWithValue }) => {
    try {
      console.log("I AM SENDING UIPDATED TIME : ", time * 60);
      const { data } = await axios.post("/user/time", { time });
      console.log("I AM RECIEVING TIME IN RESP: ", data);

      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);

export const cancelAcc = createAsyncThunk(
  "user/cancel-account",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/user/cancel-account");
      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);

export const getRefferalStats = createAsyncThunk(
  "user/referral-code",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/user/referall-stats`);
      console.log("STATS:=============================== ", data);
      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);
