type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  color?: "primary" | "secondary" | "danger" | "success";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
};

const DefaultButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  color = "primary",
  size = "medium",
  disabled = false,
  loading = false,
}) => {
  const colorClasses = {
    primary:
      "bg-customTeal border-customTeal text-white hover:bg-black hover:text-white",
    secondary: "bg-gray-500 border-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-600 border-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 border-green-600 text-white hover:bg-green-700",
  };

  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`rounded-lg uppercase tracking-wide border transition-colors duration-700 ease-in-out
        ${sizeClasses[size]} ${colorClasses[color]} ${
        disabled ? "cursor-not-allowed" : ""
      } ${className}`}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default DefaultButton;
