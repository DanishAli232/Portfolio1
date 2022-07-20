import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
<link
  rel='stylesheet'
  href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css'
></link>;
// import HelmetProvider from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
