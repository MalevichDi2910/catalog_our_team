import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginSuccess } from "features/auth/model/authReducer";

export const useAuthInitialization = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(loginSuccess());
    }
  }, [dispatch]);
};
