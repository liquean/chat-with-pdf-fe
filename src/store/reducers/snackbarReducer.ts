import { createSlice } from "@reduxjs/toolkit";

export const snackbarReducer = createSlice({
  name: "snackbar",
  initialState: {
    snackbarMessage: "",
  },
  reducers: {
    setSnackbarMessage: (state, snackbar) => {
      state.snackbarMessage = snackbar.payload;
    },
  },
});

export const { setSnackbarMessage } = snackbarReducer.actions;

export default snackbarReducer.reducer;
