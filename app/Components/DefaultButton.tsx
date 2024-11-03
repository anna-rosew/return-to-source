type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const DefaultButton: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex px-13 py-3 bg-none text-black rounded-lg ${className}`}
    >
      {text}
    </button>
  );
};

export default DefaultButton;
