import { HomePage } from "../modules/home/pages/HomePage";
import { CatalogPage } from "../modules/catalog/pages/CatalogPage";
import { AccountPage } from "../modules/account/pages/AccountPage";
import { AdminPage } from "../modules/admin/pages/AdminPage";
import { AboutPage } from "../modules/content/pages/AboutPage";

export const modules = [
  { id: "home", path: "/", element: <HomePage />, public: true },
  { id: "catalog", path: "/catalogo", element: <CatalogPage />, feature: "catalog", public: true },
  { id: "about", path: "/sobre", element: <AboutPage />, public: true },
  { id: "account", path: "/conta", element: <AccountPage />, feature: "account", roles: ["user", "manager", "admin"] },
  { id: "admin", path: "/admin", element: <AdminPage />, feature: "admin", roles: ["manager", "admin"] },
];
