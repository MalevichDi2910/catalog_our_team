import React from "react";
import { Button } from "components/button/button";
import { ControlledTextField } from "components/controlled/controlledTextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  signUpFormSchema,
  SignUpFormValues,
} from "features/auth/ui/signUpForm/signUpFormSchema";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "common/store";
import { register } from "features/auth/model/authReducer";

import s from "features/auth/ui/authStyles/auth.module.scss";

export const SignUpForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    const { email, password } = data;
    await dispatch(register(email, password)).then(() => {
      navigate("/sign-in");
    });
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
        <ControlledTextField
          control={control}
          errorMessage={errors.confirmPassword?.message?.toString()}
          label={"Подтвердите пароль"}
          name={"confirmPassword"}
          type={"password"}
          placeholder={"******"}
        />
        <Button
          variant={"primary"}
          name={"Зарегистрироваться"}
          type={"submit"}
        />
      </form>
    </div>
  );
};
