import { FallbackProps } from "react-error-boundary";
import { Alert, AlertTitle } from "@mui/material";

function ErrorBoundaryAlert({ error }: FallbackProps) {
  return (
    <Alert severity="error">
      <AlertTitle>Something went wrong:</AlertTitle>
      {error.message}
    </Alert>
  );
}

export default ErrorBoundaryAlert;
