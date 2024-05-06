import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getAllPlans, getPlanById } from "./planAction";

const initialState = {
  loading: false,
  plans: [],
  error: null,
};

const planSlice = createSlice({
  name: "plans",
  initialState: initialState,
  reducers: {
    logout: state => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllPlans.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPlans.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.plans = payload;
      })
      .addCase(getAllPlans.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getPlanById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPlanById.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getPlanById.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
  },
});

export const { logout } = planSlice.actions;

export const getPlansByDuration = createSelector(
  (state)=>state.plan.plans,
  (_, duration)=>duration,
  (plans, duration)=>plans.filter(plan=>plan.durationType===duration)
)

export default planSlice.reducer;
