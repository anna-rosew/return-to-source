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

const PlainButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  color = "primary",
  disabled = false,
  loading = false,
  type = "button",
}) => {
  const colorClasses = {
    primary: "text-black border-black hover:bg-black hover:text-customBeige",
    secondary:
      "text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white",
    danger: "text-red-600 border-red-600 hover:bg-red-600 hover:text-white",
    success:
      "text-green-600 border-green-600 hover:bg-green-600 hover:text-white",
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

export default PlainButton;
