import { ComponentPropsWithoutRef } from "react";
import s from "./button.module.scss";

type ButtonPropsType = {
  name: string;
  variant: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
} & ComponentPropsWithoutRef<"button">;
export const Button = ({
  name,
  variant = "primary",
  className,
  onClick,
}: ButtonPropsType) => {
  return (
    <button className={`${s[variant]} ${className}`} onClick={onClick}>
      {name}
    </button>
  );
};
