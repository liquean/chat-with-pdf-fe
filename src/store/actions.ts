import store from "./store";
import { setSnackbarMessage } from "./reducers/snackbarReducer";

export const showSnackbar = async (message: String) => {
  store.dispatch(setSnackbarMessage(message));
};

export const hideSnackbar = async () => {
  store.dispatch(setSnackbarMessage(""));
};
