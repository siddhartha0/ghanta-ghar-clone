import classname from "classnames";
import React from "react";

interface propTypes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "header" | "medium" | "small" | "tiny";
  children: React.ReactNode;
  usage?: "brand" | "primary" | "secondary" | "link";
  varaint?: "normal" | "bold" | "semi-bold";
  classNAME?: string;
}

export const Text = React.memo(
  ({
    size = "medium",
    children,
    usage = "brand",
    classNAME,
    varaint = "normal",
    ...other
  }: propTypes) => {
    return (
      <p
        className={classname(`${classNAME}`, {
          "text-[28px] leading-8": size == "header",
          "text-[20px]": size === "medium",
          "text-[16px]": size === "small",
          "text-[10px]": size === "tiny",

          "font-normal": varaint === "normal",
          "font-bold": varaint === "bold",
          "font-semibold": varaint === "semi-bold",

          "text-text-brand": usage == "brand",
          "text-other-white-100": usage == "primary",
          "text-ternary": usage == "secondary",
          "text-link": usage == "link",
        })}
        {...other}
      >
        {children}
      </p>
    );
  }
);
