type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const DefaultButton: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={` px-10 py-3 uppercase  text-[16px] tracking-wide bg-customTeal text-white border-[1px] border-customTeal rounded-lg hover:bg-black transition-colors duration-700 ease-in-out hover:text-white ${className}`}
    >
      {text}
    </button>
  );
};

export default DefaultButton;
