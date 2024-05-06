import { createSlice } from "@reduxjs/toolkit";
import { checkUserSubscription, confirmSubscription, createSubscription } from "./subscriptionAction";

const initialState = {
  loading: false,
  subscription: null,
  error: null,
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: initialState,
  reducers: {
    logout: state => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createSubscription.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSubscription.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(createSubscription.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(confirmSubscription.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(confirmSubscription.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(confirmSubscription.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(checkUserSubscription.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkUserSubscription.fulfilled, (state, { payload }) => {
        console.log("SUBSCRIPTION ================================ ",payload, "===========");
        state.loading = false;
        state.subscription = payload;
      })
      .addCase(checkUserSubscription.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});

export const { logout } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
