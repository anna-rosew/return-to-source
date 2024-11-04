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

const BlackButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  color = "primary",
  disabled = false,
  loading = false,
  type = "button",
}) => {
  const colorClasses = {
    primary:
      "bg-black text-customBeige border-black hover:bg-customBeige hover:text-black",
    secondary: "bg-gray-600 text-white border-gray-600 hover:bg-gray-700",
    danger: "bg-red-600 text-white border-red-600 hover:bg-red-700",
    success: "bg-green-600 text-white border-green-600 hover:bg-green-700",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      className={`px-10 py-3 uppercase text-[15px] tracking-wide rounded-lg transition-colors duration-700 ease-in-out 
        ${colorClasses[color]} ${
        disabled ? "cursor-not-allowed" : ""
      } ${className}`}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default BlackButton;
