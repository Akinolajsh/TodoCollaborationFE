import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Layout from "../components/common/Layout";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },

  {
    path: "/register",
    index: true,
    element: <Register />,
  },
  {
    path: "/login",
    index: true,
    element: <Login />,
  },
]);
