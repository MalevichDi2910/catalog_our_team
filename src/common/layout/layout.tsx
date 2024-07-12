import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppRootStateType } from "common/store";
import { useEffect } from "react";

type AuthContext = {
  isAuthenticated: boolean;
};

export function useAuthContext() {
  return useOutletContext<AuthContext>();
}

export const Layout = () => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    (state: AppRootStateType) => state.auth.isAuthenticated,
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/our_team");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Outlet context={{ isAuthenticated } satisfies AuthContext} />
    </>
  );
};
