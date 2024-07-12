import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "./../layout/layout";

export function PrivateRoutes() {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? <Outlet /> : <Navigate to={"/sign-in"} />;
}
