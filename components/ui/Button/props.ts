import React, { PropsWithChildren } from "react";

type ButtonBaseProps = PropsWithChildren & {
  variant?: "contained" | "outlined";
  color?: "accent" | "primary";
  withPadding?: boolean;
};

type AsButton = ButtonBaseProps & {
  component?: "button";
} & React.ComponentPropsWithoutRef<"button">;

type AsLink = ButtonBaseProps & {
  component: "a";
} & React.ComponentPropsWithoutRef<"a">;

export type ButtonProps = AsButton | AsLink;
