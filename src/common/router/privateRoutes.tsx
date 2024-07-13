import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "./../layout/layout";
import { ScrollToTop } from "./../hooks/scrollToTop";

export function PrivateRoutes() {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  ) : (
    <Navigate to={"/sign-in"} />
  );
}
