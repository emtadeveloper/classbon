import classNames from "classnames";
import { ButtonProps, ButtonShape } from "./button.type";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};

const shapeClasses: Record<ButtonShape, string> = {
  wide: "btn-wide",
  full: "btn-black",
  square: "btn-square",
  default: "",
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  size = "normal",
  isDisabled = false,
  isOutline = false,
  shape = "default",
  isLoading = false,
  loadingType = "Spinner",
  loadingText = "درحال ارسال درخواست ...",
  type = "button",
  isLink = false,
  animatedIcon = false,
  children,
  className,
  ...rest
}: ButtonProps) => {
  //
  const classes = classNames(
    "brn",
    className,
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { "animated-icon": animatedIcon },
    { "pointer-events-none opacity-80": isLoading },
    { [`btn-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size },
    { [`${shapeClasses[shape]}`]: shape }
  );

  return (
    <button type={type} disabled={isDisabled} {...rest} className={classes}>
      {isLoading ? loadingText : children}
    </button>
  );
};
