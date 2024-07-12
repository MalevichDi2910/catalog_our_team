import { Header } from "components/header/header";
import s from "features/partnerСard/partnerCard.module.scss";
import { Phone } from "assets/icons/phone";
import { Email } from "assets/icons/email";
import { AppRootStateType, useAppDispatch } from "common/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserPage } from "features/usersList/model/usersReducer";
import { Loader } from "components/loader/loader";

export const PartnerCard = () => {
  const user = useSelector((state: AppRootStateType) => state.users.user);
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getUserPage(Number(id)));
    }
  }, [id, dispatch]);

  if (!user) {
    return <Loader />;
  }

  return (
    <div className={s.container}>
      <Header userPage={true} user={user} />
      <main className={s.wrapper}>
        <div className={s.text}>
          <p>
            Клиенты видят в нем эксперта по вопросам разработки комплексных
            решений финансовых продуктов, включая такие аспекты, как
            организационная структура, процессы, аналитика и ИТ-компоненты. Он
            помогает клиентам лучше понимать структуру рисков их бизнеса,
            улучшать процессы за счет применения новейших технологий и
            увеличивать продажи, используя самые современные аналитические
            инструменты.
          </p>
          <p>
            В работе с клиентами недостаточно просто решить конкретную проблему
            или помочь справиться с трудностями. Не менее важно уделять внимание
            обмену знаниями: "Один из самых позитивных моментов — это осознание
            того, что ты помог клиенту перейти на совершенно новый уровень
            компетентности, уверенность в том, что после окончания проекта у
            клиента есть все необходимое, чтобы дальше развиваться
            самостоятельно".
          </p>
          <p>
            Помимо разнообразных проектов для клиентов финансового сектора,
            Сорин ведет активную предпринимательскую деятельность. Он является
            совладельцем сети клиник эстетической медицины в Швейцарии,
            предлагающей инновационный подход к красоте, а также инвестором
            других бизнес-проектов.
          </p>
        </div>
        <div className={s.info}>
          <div className={s.contact}>
            <Phone />
            <span>+7 (954) 333-44-55</span>
          </div>
          <div className={s.contact}>
            <Email />
            <span>{user.email}</span>
          </div>
        </div>
      </main>
    </div>
  );
};
