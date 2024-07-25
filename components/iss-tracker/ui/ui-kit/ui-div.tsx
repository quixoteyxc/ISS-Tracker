import clsx from "clsx";
import React, { ReactNode } from "react";

type UiDivProps = {
  size: "big" | "small";
  children?: ReactNode;
  className?: string;
};

export function UiDiv({ size, children, className }: UiDivProps) {
  const divClassName = clsx(
    "border border-black",
    {
      big: "w-2/3",
      small: "w-1/3",
    }[size],
    className
  );

  return <div className={divClassName}>{children}</div>;
}
