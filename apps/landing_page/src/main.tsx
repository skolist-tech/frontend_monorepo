import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";
import { AuthProvider } from "@skolist/auth";
import { Toaster } from "@skolist/ui";
import App from "./App";
import "./index.css";

ReactGA.initialize("G-HN0651N4DY");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
        <Toaster />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
