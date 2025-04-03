import snackbarReducer from "./reducers/snackbarReducer";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    showSnackbar: snackbarReducer,
  },
});
