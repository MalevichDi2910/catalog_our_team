import s from "./header.module.scss";
import { Button } from "components/button/button";
import { useNavigate } from "react-router-dom";
import { logOut } from "features/auth/model/authReducer";
import { useAppDispatch } from "common/store";
import { UserType } from "features/usersList/api/users.types";
import { Exit } from "assets/icons/exit";
import { Back } from "assets/icons/back";
import { Edit } from "assets/icons/edit";
import { ChangeEvent, useEffect, useState } from "react";

type HeaderPropsType = {
  userPage: boolean;
  user?: UserType;
};
export const Header = ({ userPage, user }: HeaderPropsType) => {
  const [avatar, setAvatar] = useState<string | null>(user?.avatar || null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setAvatar(user?.avatar || null);
  }, [user]);

  const handleLogout = () => {
    dispatch(logOut());
  };

  const goToUsersList = () => {
    navigate("/users");
  };

  const onChangeAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const newAvatar = URL.createObjectURL(file);
      setAvatar(newAvatar);
    }
  };

  return (
    <>
      {userPage && (
        <header className={s.header}>
          <Button
            name={"Назад"}
            variant={"secondary"}
            className={s.btnBack}
            onClick={goToUsersList}
          />
          <span className={s.iconBack} onClick={goToUsersList}>
            <Back />
          </span>
          <div className={s.wrapper}>
            <img
              src={avatar || user?.avatar || ""}
              alt={`${user?.first_name} ${user?.last_name}`}
            />
            <label className={s.editButton} htmlFor={"photoInput"}>
              <Edit />
              <input
                id={"photoInput"}
                onChange={onChangeAvatarHandler}
                style={{ display: "none" }}
                type={"file"}
              />
            </label>
            <div className={s.partnerInfo}>
              <h1>
                {user?.first_name} {user?.last_name}
              </h1>
              <h2>Партнер</h2>
            </div>
          </div>
          <Button
            name={"Выход"}
            variant={"secondary"}
            className={s.btnExit}
            onClick={handleLogout}
          />
          <span className={s.iconExit} onClick={handleLogout}>
            <Exit />
          </span>
        </header>
      )}

      {!userPage && (
        <header className={s.header}>
          <div className={s.mainText}>
            <h1>Наша команда</h1>
            <h2>
              Это опытные специалисты, хорошо разбирающиеся во всех задачах,
              которые ложатся
              <br /> на их плечи, и умеющие находить выход из любых, даже самых
              сложных ситуаций.
            </h2>
          </div>
          <Button
            name={"Выход"}
            variant={"secondary"}
            className={s.btnExit}
            onClick={handleLogout}
          />
          <span className={s.iconExit} onClick={handleLogout}>
            <Exit />
          </span>
        </header>
      )}
    </>
  );
};
