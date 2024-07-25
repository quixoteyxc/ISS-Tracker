import clsx from "clsx";
import React from "react";

type InfoHolderProps = {
  children?: React.ReactNode;
  className?: string;
};

export function InfoHolder({ children, className }: InfoHolderProps) {
  return <div className={clsx("flex gap-3", className)}>{children}</div>;
}
