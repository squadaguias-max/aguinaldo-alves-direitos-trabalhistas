import { Route, Routes } from "react-router-dom";
import { appConfig } from "../../config/app.config";
import { modules } from "../../config/modules.config.jsx";
import { ProtectedRoute } from "../../core/auth/ProtectedRoute";
import { AppShell } from "../../shared/layout/AppShell";
import { LoginPage } from "../../modules/account/pages/LoginPage";
import { NotFoundPage } from "../../shared/pages/NotFoundPage";
import { AccessDeniedPage } from "../../shared/pages/AccessDeniedPage";

const enabledModules = modules.filter(({ feature }) => !feature || appConfig.features[feature]);

export function AppRouter() {
  return <Routes><Route element={<AppShell />}>
    {enabledModules.map((route) => <Route key={route.id} path={route.path} element={route.public ? route.element : <ProtectedRoute roles={route.roles}>{route.element}</ProtectedRoute>} />)}
    <Route path="/login" element={<LoginPage />} /><Route path="/acesso-negado" element={<AccessDeniedPage />} /><Route path="*" element={<NotFoundPage />} />
  </Route></Routes>;
}
