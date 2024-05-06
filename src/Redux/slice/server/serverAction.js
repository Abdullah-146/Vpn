import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../api/axios";
import { errorHandler } from "../../errorHanlder";

export const getAllServers = createAsyncThunk(
  "servers/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/servers");
      return data;
    } catch (error) {
      let err = errorHandler(error);
      return rejectWithValue(err);
    }
  }
);


//TODO: I think this is the file being sent in chunks from the server handle it properly
export const getServerById = createAsyncThunk(
    "servers/getById",
    async (id, { rejectWithValue }) => {
        try {
        const { data } = await axios.get(`/servers/${id}`);
        return data;
        } catch (error) {
        let err = errorHandler(error);
        return rejectWithValue(err);
        }
    }
);


export const getConnectionDetails = createAsyncThunk(
    "servers/getConnectionDetails",
    async (serverId, { rejectWithValue }) => {
        try {
        const { data } = await axios.get(`/servers/get-connection-details/${serverId}`);
        return data;
        } catch (error) {
        let err = errorHandler(error);
        return rejectWithValue(err);
        }
    }
)


