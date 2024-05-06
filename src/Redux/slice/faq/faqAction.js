import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../api/axios";
import { errorHandler } from "../../errorHanlder";

export const getAllFaqs = createAsyncThunk(
  "faq/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/faqs/all");
      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);


export const getFaqById = createAsyncThunk(
  "faq/getById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/faqs/${id}`);
      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);

