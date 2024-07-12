import { AppThunkDispatch } from "common/store";
import { authAPI } from "features/auth/api/authApi";

const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const initialState = {
  isAuthenticated: !!localStorage.getItem("token"),
};

type AuthStateType = typeof initialState;

export const authReducer = (
  state = initialState,
  action: AuthActionType,
): AuthStateType => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const register = (email: string, password: string) => {
  return async (dispatch: AppThunkDispatch) => {
    try {
      const res = await authAPI.registerSuccessful(email, password);
      const token = res.data.token;
      localStorage.setItem("token", token);
      dispatch(registerSuccess());
    } catch (error) {
      console.error("Registration failed", error);
    }
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: AppThunkDispatch) => {
    try {
      const res = await authAPI.loginSuccessful(email, password);
      const token = res.data.token;
      localStorage.setItem("token", token);
      dispatch(loginSuccess());
    } catch (error) {
      console.error("Login failed", error);
    }
  };
};

export const logOut = () => {
  return async (dispatch: AppThunkDispatch) => {
    try {
      localStorage.removeItem("token");
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
};

export const registerSuccess = () =>
  ({
    type: REGISTER_SUCCESS,
  }) as const;

export const loginSuccess = () =>
  ({
    type: LOGIN_SUCCESS,
  }) as const;

export const logout = () =>
  ({
    type: LOGOUT,
  }) as const;

type AuthActionType =
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof logout>
  | ReturnType<typeof registerSuccess>;
