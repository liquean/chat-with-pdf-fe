import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import ErrorBoundaryAlert from "./ErrorBoundary";
import "./index.css";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://b3ce39941c7f0ad43adb483c7372e7d0@o4508906009919488.ingest.us.sentry.io/4509091934109696",
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ErrorBoundary fallbackRender={ErrorBoundaryAlert}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
