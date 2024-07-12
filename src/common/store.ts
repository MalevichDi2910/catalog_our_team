import {
  combineReducers,
  legacy_createStore,
  AnyAction,
  applyMiddleware,
} from "redux";
import { usersReducer } from "features/usersList/model/usersReducer";
import { useDispatch } from "react-redux";
import { thunk, ThunkDispatch } from "redux-thunk";
import { authReducer } from "features/auth/model/authReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
