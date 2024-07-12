import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "common/store";
import { fetchUsers } from "features/usersList/model/usersReducer";
import s from "./pagination.module.scss";

export const Paginator = () => {
  const dispatch = useDispatch();
  const { page, total_pages } = useSelector(
    (state: AppRootStateType) => state.users,
  );

  const handlePageChange = (newPage: number) => {
    dispatch(fetchUsers(newPage));
  };

  return (
    <div className={s.paginator}>
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page <= 1}
        className={s.buttons}
      >
        Prev
      </button>
      {Array.from({ length: total_pages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => handlePageChange(i + 1)}
          className={page === i + 1 ? s.active : ""}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page >= total_pages}
        className={s.buttons}
      >
        Next
      </button>
    </div>
  );
};
