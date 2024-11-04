type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const DefaultButton: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`m-5 px-10 py-3 uppercase font-medium text-[20px] tracking-wide bg-none text-black border-2 border-black rounded-lg hover:bg-black transition-colors duration-700 ease-in-out hover:text-[#CABB9D] ${className}`}
    >
      {text}
    </button>
  );
};

export default DefaultButton;
