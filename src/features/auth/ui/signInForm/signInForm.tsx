import React from "react";
import { Button } from "components/button/button";
import { ControlledTextField } from "components/controlled/controlledTextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  signInFormSchema,
  SignInFormValues,
} from "features/auth/ui/signInForm/signInFormSchema";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "common/store";
import { login } from "features/auth/model/authReducer";

import s from "features/auth/ui/authStyles/auth.module.scss";

export const SignInForm = () => {
  const {
    control,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInFormSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    const { email, password } = data;
    await dispatch(login(email, password));
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.titles}>
          <NavLink
            to={"/sign-up"}
            className={({ isActive }) =>
              isActive ? `${s.link} ${s.active}` : s.link
            }
          >
            <span className={s.title}>Регистрация</span>
          </NavLink>
          <div className={s.headerDelimiter}>/</div>
          <NavLink
            to={"/sign-in"}
            className={({ isActive }) =>
              isActive ? `${s.link} ${s.active}` : s.link
            }
          >
            <span className={s.title}>Вход</span>
          </NavLink>
        </div>

        <ControlledTextField
          control={control}
          errorMessage={errors.name?.message?.toString()}
          label={"Имя"}
          name={"name"}
          placeholder={"Артур"}
        />
        <ControlledTextField
          control={control}
          errorMessage={errors.email?.message?.toString()}
          label={"Электронная почта"}
          name={"email"}
          placeholder={"example@mail.ru"}
        />
        <ControlledTextField
          control={control}
          errorMessage={errors.password?.message?.toString()}
          label={"Пароль"}
          name={"password"}
          type={"password"}
          placeholder={"******"}
        />
        <Button variant={"primary"} name={"Войти"} type={"submit"} />
        {isSubmitSuccessful ? (
          <span className={s.errorLogin}>Incorrect email or password</span>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};
