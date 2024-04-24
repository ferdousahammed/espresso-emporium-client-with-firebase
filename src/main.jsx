import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AddCoffee from "./pages/AddCoffee";
import UpdateCoffee from "./pages/UpdateCoffee";
import CoffeeDetails from "./pages/CoffeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/coffees"),
        element: <Home />,
      },
      {
        path: "/coffee/add",
        element: <AddCoffee />,
      },
      {
        path: "/coffee/:id/update",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
