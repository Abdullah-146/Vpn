import { createSlice } from "@reduxjs/toolkit";
import { get, remove, save } from "../../reuseable";
import { deleteDevice, getMyDevices } from './deviceAction';

const initialState = {
  loading: false,
  currentDevice: null,
  devices: [],
  error: null,
};

const deviceSlice = createSlice({
  name: "device",
  initialState: initialState,
  reducers: {
    logout: state => {
      return initialState;
    },
    removeDevice: (state, { payload }) => {
      state.devices = state.devices.filter(item => item.id !== payload);
    },
    setCurrentDevice: (state, { payload }) => {
      state.currentDevice = payload;
    },

  },
  extraReducers: builder => {
    builder
      .addCase(getMyDevices.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMyDevices.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.devices = payload.devices;

      })
      .addCase(getMyDevices.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(deleteDevice.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteDevice.fulfilled, (state, { payload }) => {
        console.log("PAYLOAD: ", payload);
        state.loading = false;
        // state.devices = payload.devices;

      })
      .addCase(deleteDevice.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
     
  },
});

export const { logout, removeDevice, setCurrentDevice } = deviceSlice.actions;

export default deviceSlice.reducer;
