import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/Store";
import { PersistGate } from "redux-persist/integration/react";
// styles
import "./styles/GlobalStyle.css";

// ==== Composant ==== //
import Error404 from "./components/Error404";
// =================== //

// === Pages === //

import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateEmployee />,
  },
  {
    path: "/employee-list",
    element: <EmployeeList />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
