import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { Layout } from "./../layout/layout";
import { PrivateRoutes } from "./privateRoutes";
import { privateRoutes, publicRoutes } from "./settings";

const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <Layout />,
    errorElement: <Navigate to={"/not-found"} />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
