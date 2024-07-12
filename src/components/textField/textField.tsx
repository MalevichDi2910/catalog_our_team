import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  ReactNode,
  useState,
} from "react";

import { EyeOff } from "assets/icons/eyeOff";
import { EyeOutline } from "assets/icons/eyeOutline";

import s from "./textField.module.scss";

export type TextFieldProps = {
  errorMessage?: string;
  label: ReactNode;
  onChangeValue?: (value: string) => void;
  value?: string;
} & ComponentPropsWithoutRef<"input">;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      errorMessage,
      label,
      placeholder,
      type,
      value,
      onChange,
      onChangeValue,
      ...rest
    },
    ref,
  ) => {
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

    const showError = !!errorMessage && errorMessage.length > 0;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      onChangeValue?.(e.currentTarget.value);
    };

    const toggleVisiblePassword = () => {
      setVisiblePassword((visiblePassword) => !visiblePassword);
    };

    return (
      <div className={s.field}>
        {label && <label>{label}</label>}
        <input
          className={errorMessage ? s.errorField : s.inputField}
          onChange={onChangeHandler}
          placeholder={placeholder}
          type={"password" && visiblePassword ? "text" : type}
          value={value}
          ref={ref}
          {...rest}
        />
        {type === "password" && (
          <span className={s.eyeIcon} onClick={toggleVisiblePassword}>
            {visiblePassword ? <EyeOff /> : <EyeOutline />}
          </span>
        )}
        {showError && <span className={s.error}>{errorMessage}</span>}
      </div>
    );
  },
);
