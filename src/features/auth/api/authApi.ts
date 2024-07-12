import { instance } from "common/api/commonApi";

export const authAPI = {
  loginSuccessful(email: string, password: string) {
    return instance.post<{ token: string }>("api/login", { email, password });
  },
  registerSuccessful(email: string, password: string) {
    return instance.post<{ id: number; token: string }>("api/register", {
      email,
      password,
    });
  },
};
