import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { routes } from "./utils/routes";
import { useAuth } from "./hooks/useAuth";
import { LinearProgress } from "@mui/material";
import Home from "./pages/Home";
import Layout from "./componentes/layouts/Layout";
import ContentCategory from "./componentes/ContentCategory";

const publicRoutes = [
  { path: routes.auth.login, element: <Login /> },
  { path: routes.auth.register, element: <Register /> },
  { path: "*", element: <Navigate to={routes.auth.login} /> },
];

const privateRoutes = [
  {
    element: <Layout />,
    children: [
      { path: routes.common.home, element: <Home /> },
      { path: routes.category, element: <ContentCategory /> },
      { path: "*", element: <Navigate to={routes.common.home} /> },
    ],
  },
];

function Routes() {
  const { user, isLoading } = useAuth();
  const router = createBrowserRouter(user ? privateRoutes : publicRoutes);
  if (isLoading) return <LinearProgress />;
  return <RouterProvider router={router} />;
}

export default Routes;
