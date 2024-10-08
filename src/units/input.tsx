import classname from "classnames";
import React from "react";

interface propTypes
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  inputSize?: "medium" | "small" | "large";
  children?: React.ReactNode;
  varaint?: "border" | "border-less";
  outline?: boolean;
}

export const InputField = React.memo(
  ({
    inputSize = "medium",
    outline = false,
    varaint = "border",
    children,
    ...other
  }: propTypes) => {
    return (
      <input
        className={classname("", {
          "py-[5px] px-[20px] bg-brand text-[16px] text-input-color ":
            inputSize == "medium",

          "py-[6px] px-3 text-[14px]  bg-brand text-input-color rounded-md":
            inputSize == "small",

          "outline-outline": outline,

          "border border-black border-opacity-[.2]": varaint === "border",
        })}
        {...other}
      >
        {children}
      </input>
    );
  }
);
