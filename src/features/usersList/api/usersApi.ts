import { instance } from "common/api/commonApi";
import {
  InitialStateType,
  UserResponse,
} from "features/usersList/api/users.types";

export const usersApi = {
  getUsersList(page: number, perPage: number) {
    return instance.get<InitialStateType>(
      `api/users?page=${page}&per_page=${perPage}`,
    );
  },
  getUser(id: number) {
    return instance.get<UserResponse>(`api/users/${id}`);
  },
};
