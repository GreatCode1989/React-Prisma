import React from "react";
import { ConfigProvider, theme } from "antd";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import { Paths } from "./paths";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Auth } from "./features/auth/auth";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <h1>Employees</h1>,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.register,
    element: <Register />,
  },
]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
        }}
      >
        <Auth>
          <RouterProvider router={router} />
        </Auth>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
