/* eslint-disable @typescript-eslint/no-unused-vars */
import { ButtonProps } from "./props";

const ButtonComponent = (props: ButtonProps) => {
  const {
    variant = "contained",
    color = "accent",
    className,
    withPadding = true,
  } = props;

  const baseClasses = "cursor-pointer font-button text-xs md:text-sm";

  const paddingClasses = withPadding ? "px-4 py-2 md:px-6 md:py-3" : "";
  let variantClasses: string = "";

  if (variant === "contained") {
    if (color === "accent") {
      variantClasses = "bg-accent text-button";
    } else if (color === "primary") {
      variantClasses = "bg-[var(--bg-default)] text-primary";
    }
  } else if (variant === "outlined") {
    variantClasses = "border";

    if (color === "accent") {
      variantClasses = variantClasses + " border-accent text-accent";
    } else if (color === "primary") {
      variantClasses =
        variantClasses + " border-[var(--bg-default)] text-[var(--bg-default)]";
    }
  }

  const combinedClasses = `${baseClasses} ${paddingClasses} ${variantClasses} ${
    className || ""
  }`;

  if (props.component === "a") {
    const {
      component: _component,
      variant: _variant,
      className: _className,
      color: _color,
      withPadding: _withPadding,
      children,
      ...linkProps
    } = props;

    return (
      <a {...linkProps} className={combinedClasses}>
        {children}
      </a>
    );
  }

  const {
    component: _component,
    variant: _variant,
    className: _className,
    color: _color,
    withPadding: _withPadding,
    children,
    ...buttonProps
  } = props;

  return (
    <button {...buttonProps} className={combinedClasses}>
      {children}
    </button>
  );
};

export default ButtonComponent;
