import clsx from "clsx";

const Button = ({
  children,
  onClick,
  type = "button",
  size = "md",
  variant = "primary",
  rounded = "md",
  className = "",
  iconSrc,         // image path for icon on the left
  iconRightSrc,    // image path for icon on the right
  iconOnly = false,
  fullWidth = false,
  disabled = false,
}) => {
  const baseStyles =
    "flex items-center justify-center font-medium transition duration-200 focus:outline-none";

  const sizeMap = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantMap = {
    primary: "bg-teal-600 text-white hover:bg-teal-700",
    outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    white: "bg-white text-black hover:bg-gray-100 border border-gray-200",
    neutral: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    danger: "bg-red-600 text-white hover:bg-red-700",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
    dark: "bg-[#0A0A0A] text-white hover:bg-black",
    orangeOutline: "border border-orange-500 text-orange-500 hover:bg-orange-50",
  };

  const roundedMap = {
    md: "rounded-md",
    full: "rounded-full",
  };

  const classes = clsx(
    baseStyles,
    sizeMap[size],
    variantMap[variant],
    roundedMap[rounded],
    {
      "w-full": fullWidth,
      "opacity-50 cursor-not-allowed": disabled,
      "p-2": iconOnly && !children,
    },
    className
  );

  return (
    <button onClick={onClick} type={type} disabled={disabled} className={classes}>
      {/* Left icon image */}
      {iconSrc && (
        <img
          src={iconSrc}
          alt="icon"
          className={clsx("w-4 h-4", children && "mr-2")}
        />
      )}

      {/* Text (unless it's an icon-only button) */}
      {!iconOnly && children}

      {/* Right icon image */}
      {iconRightSrc && (
        <img
          src={iconRightSrc}
          alt="icon"
          className="w-5 h-5 ml-2"
        />
      )}
    </button>
  );
};

export default Button;
