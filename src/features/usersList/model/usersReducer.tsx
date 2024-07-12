import { usersApi } from "features/usersList/api/usersApi";
import { AppThunkDispatch } from "common/store";
import { InitialStateType, UserType } from "features/usersList/api/users.types";

const initialState: InitialStateType = {
  page: 1,
  per_page: 8,
  total: 0,
  total_pages: 0,
  data: [],
  support: {
    url: "",
    text: "",
  },
  user: null,
};

const FETCH_USERS_LIST = "FETCH_USERS_LIST";
const FETCH_USER = "FETCH_USER";
const TOGGLE_LIKE = "TOGGLE_LIKE";
export const fetchUsersList = (data: InitialStateType) =>
  ({ type: FETCH_USERS_LIST, data }) as const;

export const fetchUser = (user: UserType) =>
  ({ type: FETCH_USER, user }) as const;

export const toggleLike = (userId: number) =>
  ({ type: TOGGLE_LIKE, userId }) as const;

export type UsersListActionsTypes =
  | ReturnType<typeof fetchUsersList>
  | ReturnType<typeof fetchUser>
  | ReturnType<typeof toggleLike>;

export const usersReducer = (
  state: InitialStateType = initialState,
  action: UsersListActionsTypes,
) => {
  switch (action.type) {
    case "FETCH_USERS_LIST":
      const { page, per_page, total, total_pages, data, support } = action.data;
      return {
        ...state,
        page,
        per_page,
        total,
        total_pages,
        data: data.map((user) => ({
          ...user,
          like: localStorage.getItem(`user_like_${user.id}`) === "true",
        })),
        support,
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.user,
      };
    case TOGGLE_LIKE:
      const updatedData = state.data.map((user) =>
        user.id === action.userId ? { ...user, like: !user.like } : user,
      );
      localStorage.setItem(
        `user_like_${action.userId}`,
        updatedData
          .find((user) => user.id === action.userId)
          ?.like.toString() || "false",
      );
      return {
        ...state,
        data: updatedData,
      };
    default:
      return state;
  }
};

export const fetchUsers = (page = 1, perPage = 8) => {
  return async (dispatch: AppThunkDispatch) => {
    try {
      const res = await usersApi.getUsersList(page, perPage);
      dispatch(fetchUsersList(res.data));
    } catch (error) {
      console.error("Uploading users failed", error);
    }
  };
};

export const getUserPage = (id: number) => {
  return async (dispatch: AppThunkDispatch) => {
    try {
      const res = await usersApi.getUser(id);
      dispatch(fetchUser(res.data.data));
    } catch (error) {
      console.error("Getting a user failed", error);
    }
  };
};
