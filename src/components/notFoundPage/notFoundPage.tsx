import { NotFound } from "assets/icons/notFound";

import s from "./notFoundPage.module.scss";
import { Button } from "components/button/button";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className={s.container}>
      <div className={s.image}>
        <NotFound />
      </div>
      <span className={s.text}>Sorry! Page not found!</span>
      <Button
        name={"Back to home page"}
        variant={"primary"}
        onClick={goBack}
        className={s.btn}
      />
    </div>
  );
};
