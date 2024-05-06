import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../api/axios";
import { errorHandler } from "../../errorHanlder";

export const createSubscription = createAsyncThunk(
    "subscription/create",
    async (reqData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post("/subscriptions", reqData);
            return data;
        } catch (error) {
            let err = errorHandler(error);
            return rejectWithValue(err);
        }
    }
);


export const confirmSubscription = createAsyncThunk(
    "subscription/confirm",
    async (paymentIntentId, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/subscriptions/confirm-subscription/${paymentIntentId}`);
            return data;
        } catch (error) {
            let err = errorHandler(error);
            return rejectWithValue(err);
        }
    }
);


export const checkUserSubscription = createAsyncThunk(
    "subscription/checkUserSubscription",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/subscriptions/user/${id}`);
            return data;
        } catch (error) {
            let err = errorHandler(error, true);
            return rejectWithValue(err);
        }
    }
)
