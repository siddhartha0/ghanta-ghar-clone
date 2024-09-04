import classname from "classnames";
import React from "react";

interface propTypes
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "medium" | "small" | "large";
  children: React.ReactNode;
  usage?: "info" | "click";
  outline?: boolean;
  classNAME?: string;
  varaint?: "sm" | "lg";
}

export const Button = React.memo(
  ({
    size = "medium",
    outline = false,
    usage = "info",
    varaint = "sm",
    classNAME,
    children,
    ...other
  }: propTypes) => {
    return (
      <button
        className={classname(`${classNAME}`, {
          "py-2 px-4 text-xl": size == "medium",
          "py-[6px] px-3 text-base": size == "small",
          "py-[15px] px-[24px] text-xl": size == "large",
          "border border-other-white-100": outline,
          "bg-secondary  text-other-white-100": usage == "info",
          "bg-ternary  text-other-white-100": usage == "click",
          "rounded-md": varaint === "sm",
          "rounded-lg": varaint === "lg",
        })}
        {...other}
      >
        {children}
      </button>
    );
  }
);
