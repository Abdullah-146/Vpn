import { createSlice, createSelector } from "@reduxjs/toolkit";
import {
  getAllServers,
  getServerById,
  getConnectionDetails,
} from "./serverAction";

const initialState = {
  loading: false,
  servers: [],
  error: null,
  selectedServer: null,
};

const serverSlice = createSlice({
  name: "servers",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      return initialState;
    },
    setSelectedServer: (state, { payload }) => {
      state.selectedServer = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllServers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllServers.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
        state.loading = false;
        state.servers = payload;

        // initally set the selected server to the first server that is not premium
        const selectedServer = payload.find((server) => !server.isPremium);
        if (selectedServer) {
          state.selectedServer = selectedServer;
        }
      })
      .addCase(getAllServers.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getServerById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getServerById.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getServerById.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getConnectionDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getConnectionDetails.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getConnectionDetails.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { logout, setSelectedServer } = serverSlice.actions;

// get all servers from servers that matches the search query
export const filteredServers = createSelector(
  (state) => state.server.servers,
  (_, searchQuery) => searchQuery,
  (servers, searchQuery) => {
    if (searchQuery === "") {
      return [...servers].sort((a, b) => b.isPremium - a.isPremium);
    }
    return [...servers]
      .filter((server) =>
        server.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => b.isPremium - a.isPremium);
  }
);

export default serverSlice.reducer;
