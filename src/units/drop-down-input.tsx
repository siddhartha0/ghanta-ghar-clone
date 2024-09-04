import classname from "classnames";
import React from "react";

interface propTypes
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  inputSize?: "medium" | "small" | "large";
  children?: React.ReactNode;
  varaint?: "border" | "border-less";
  rounded?: "sm" | "lg" | "xl";
  outline?: boolean;
  options: string[];
}

export const DropDown = React.memo(
  ({
    inputSize = "medium",
    outline = false,
    varaint = "border",
    rounded = "sm",
    options,
    ...other
  }: propTypes) => {
    return (
      <select
        name=""
        id=""
        className={classname("", {
          "py-2 pr-9 pl-4 bg-brand text-[16px] text-input-color ":
            inputSize == "medium",

          "py-[6px] px-3 text-[14px]  bg-brand text-input-color rounded-md":
            inputSize == "small",
          "rounded-md": rounded === "sm",
          "rounded-lg": rounded === "lg",
          "rounded-xl": rounded === "xl",

          "outline-outline": outline,

          "border border-black border-opacity-[.2]": varaint === "border",
        })}
        {...other}
      >
        {options.map((opt, index) => (
          <option value={opt} key={index + opt}>
            {opt}
          </option>
        ))}
      </select>
    );
  }
);
