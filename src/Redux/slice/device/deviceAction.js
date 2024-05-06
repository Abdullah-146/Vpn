import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../api/axios";
import { errorHandler } from "../../errorHanlder";
import { save } from "../../reuseable";

export const getMyDevices = createAsyncThunk(
  "/device",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/user/devices");
      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);


export const deleteDevice = createAsyncThunk(
    "/device/delete",
    async ({ id }, { rejectWithValue }) => {
        try {
        const { data } = await axios.delete(`/user/devices/${id}`);
        return data;
        } catch (error) {
        let err = errorHandler(error);
        return rejectWithValue(err);
        }
    }
    );

