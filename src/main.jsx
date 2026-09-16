import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { AppProviders } from "./app/providers/AppProviders";
import { AppRouter } from "./app/router/AppRouter";
import { applyBrand } from "./core/theme/applyBrand";
import { appConfig } from "./config/app.config";
import "./styles/index.css";

applyBrand(appConfig.brand);

createRoot(document.getElementById("root")).render(
  <StrictMode><HashRouter><AppProviders><AppRouter /></AppProviders></HashRouter></StrictMode>,
);
