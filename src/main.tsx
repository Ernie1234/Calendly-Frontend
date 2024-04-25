import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigation from "./auth/Auth0ProviderWithNavigation.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigation>
        <App />
      </Auth0ProviderWithNavigation>
    </BrowserRouter>
  </React.StrictMode>
);
