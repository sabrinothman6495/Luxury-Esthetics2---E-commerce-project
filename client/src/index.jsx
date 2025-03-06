import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // Tailwind CSS (you can modify if necessary)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your app with BrowserRouter to enable routing */}
      <App /> {/* Your main App component */}
    </BrowserRouter>
  </React.StrictMode>
);
