export type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  like: boolean;
};

export type Support = {
  url: string;
  text: string;
};

export type InitialStateType = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserType[];
  support: Support;
  user: UserType | null;
};

export type UserResponse = {
  data: UserType;
  support: Support;
};
