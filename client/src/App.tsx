import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegPage from "./pages/RegPage";
import ErrorPage from "./pages/ErrorPage";
import AuthPage from "./pages/AuthPage";
import StatementsPage from "./pages/StatementsPage";
import StatementMakingPage from "./pages/StatementMakingPage";
import AdminPage from "./pages/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
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
