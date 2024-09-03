import classname from "classnames";
import React from "react";

interface propTypes
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  inputSize?: "medium" | "small" | "large";
  children?: React.ReactNode;
  usage?: "search" | "form";
}

export const InputField = React.memo(
  ({ inputSize = "medium", usage = "form", children, ...other }: propTypes) => {
    return (
      <input
        className={classname("", {
          "py-[5px] px-[20px] text-[14px] border border-border border-opacity-[.2] outline-none text-input-color ":
            inputSize == "medium",
          "py-[7px] px-[16px] text-[13px] border-border border-opacity-[.4] text-input-color":
            inputSize == "small",
          "py-[15px] px-[24px] text-[16px] border rounded-md border-text-brand border-opacity-[.2]  text-input-color outline-none":
            inputSize == "large",
          "bg-other-white-100  ": usage == "form",
          "bg-[#e3e3e3] ": usage == "search",
        })}
        {...other}
      >
        {children}
      </input>
    );
  }
);
