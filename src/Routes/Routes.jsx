import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import UpdatePropfile from "../pages/UpdatePropfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivetRoute from "./PrivetRoute";
import DetailsPage from "../pages/DetailsPage";
import Booking from "../pages/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/update-profile",
        element: <PrivetRoute>
          <UpdatePropfile></UpdatePropfile>
        </PrivetRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/details/:id",
        element: <PrivetRoute>
          <DetailsPage></DetailsPage>
        </PrivetRoute>
      },
      {
        path: "/booking",
        element: <PrivetRoute>
          <Booking></Booking>
        </PrivetRoute>
      }
    ]
  },
]);

export default router;