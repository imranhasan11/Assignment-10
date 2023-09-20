import React from "react";
import { createBrowserRouter } from "react-router-dom";
import  Main from "../layout/Main";
//import Login from "../pages/Login";
//import CheffDetails from "../pages/CheffDetails";
//import Register from "../pages/Register";
//import PrivateRoute from "./PrivateRoute";
//import HomePageLayout from "../pages/HomePageLayout";
//import ErrorPage from "../pages/ErrorPage";
//import Blog from "../pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
   /* errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePageLayout></HomePageLayout>,
        loader: () =>
          fetch("https://tasty-bites-server-antik1801.vercel.app/chefs"),
      },
      {
        path: "/chefDetails/:id",
        element: (
          <PrivateRoute>
            <CheffDetails></CheffDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tasty-bites-server-antik1801.vercel.app/chefs/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      }
    ],*/
  },
]);

export default router;