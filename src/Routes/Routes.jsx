import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <p>No page found</p>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        }
      ]
    },
  ]);

export default router;