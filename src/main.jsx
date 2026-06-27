import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AccessGate } from "./components/access/AccessGate.jsx";
import { ErrorBoundary } from "./components/common/ErrorBoundary.jsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AccessGate>
        <App />
      </AccessGate>
    </ErrorBoundary>
  </React.StrictMode>
);
