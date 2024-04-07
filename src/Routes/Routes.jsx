import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import UpdatePropfile from "../pages/UpdatePropfile";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <p>No page found</p>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/update-profile",
          element: <UpdatePropfile></UpdatePropfile>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
  ]);

export default router;