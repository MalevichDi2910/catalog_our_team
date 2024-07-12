import s from "features/usersList/ui/users.module.scss";
import { Header } from "components/header/header";
import { fetchUsers } from "features/usersList/model/usersReducer";
import { useEffect } from "react";
import { AppRootStateType, useAppDispatch } from "common/store";
import { useSelector } from "react-redux";
import { UserCard } from "features/usersList/userCard/userCard";
import { UserType } from "features/usersList/api/users.types";
import { Paginator } from "components/pagination/pagination";

export const Users = () => {
  const {
    data: users,
    page,
    per_page,
  } = useSelector((state: AppRootStateType) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers(page, per_page));
  }, [dispatch, page, per_page]);

  return (
    <main className={s.container}>
      <Header userPage={false} />
      <div className={s.users}>
        {Array.isArray(users) &&
          users.map((user: UserType) => <UserCard key={user.id} user={user} />)}
      </div>
      <Paginator />
    </main>
  );
};
