import s from "features/usersList/userCard/userCard.module.scss";
import { Like } from "assets/icons/like";
import { UserType } from "features/usersList/api/users.types";
import { Link } from "react-router-dom";
import { useAppDispatch } from "common/store";
import { toggleLike } from "features/usersList/model/usersReducer";

type UserCardPropsType = {
  user: UserType;
};
export const UserCard = ({ user }: UserCardPropsType) => {
  const dispatch = useAppDispatch();
  const handleLike = () => {
    dispatch(toggleLike(user.id));
  };

  return (
    <div className={s.container}>
      <Link to={`/users/${user.id}`} className={s.link}>
        <div className={s.card}>
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <span className={s.info}>
            {user.first_name} {user.last_name}
          </span>
        </div>
      </Link>
      <span className={s.like} onClick={handleLike}>
        <Like
          fill={
            user.like ? "var(--color-primary-300)" : "var(--color-dark-100)"
          }
        />
      </span>
    </div>
  );
};
