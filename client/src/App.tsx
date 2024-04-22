import React from "react";
import RegPage from "./pages/RegPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import StatementsPage from "./pages/StatementsPage";
import StatementMakingPage from "./pages/StatementMakingPage";
import AdminPage from "./pages/AdminPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/statements",
    element: <StatementsPage />,
  },
  {
    path: "/statement-making",
    element: <StatementMakingPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
