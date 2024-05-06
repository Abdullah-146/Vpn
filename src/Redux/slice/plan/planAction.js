import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../api/axios";
import { errorHandler } from "../../errorHanlder";

export const getAllPlans = createAsyncThunk(
  "plans/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/plans");
      console.log(data);
      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);


export const getPlanById = createAsyncThunk(
  "plan/getById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/plans/${id}`);
      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);

