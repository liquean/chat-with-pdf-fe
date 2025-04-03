import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Snackbar } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { isEmpty } from "lodash";
import { hideSnackbar } from "./store/actions";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { lazy, Suspense } from "react";

const PromptForm = lazy(() => import("./components/PromptForm"));
const UploadFileForm = lazy(() => import("./components/UploadFileForm"));

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const openSnackbar = useSelector(
    (state: RootState) => state.showSnackbar.snackbarMessage
  );

  const onClose = () => {
    hideSnackbar();
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Suspense fallback={"Loading..."}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100vh",
            gap: 2,
          }}
        >
          <UploadFileForm />
          <PromptForm />
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={!isEmpty(openSnackbar)}
            autoHideDuration={5000}
            onClose={onClose}
            message={openSnackbar}
          />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
