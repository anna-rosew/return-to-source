const MorningIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill = "white",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="class-icon"
      viewBox="0 -960 960 960"
      fill={fill}
      stroke="none"
      strokeWidth="15"
      strokeMiterlimit="10"
      {...props}
    >
      <path d="M462-198q-33 0-57-17.5T372-264h27q7 21 23.5 32.5T462-220q30 0 49.5-19.5T531-290q0-31-19.5-51T462-361H106v-22h356q40 0 65.5 25.5T553-290q0 41-25.5 66.5T462-198ZM106-576v-22h516q40 0 65-25t25-66q0-41-25-66t-65-25q-33 0-55.5 18T537-716h-24q9-39 38.5-62.5T622-802q49 0 80.5 31.5T734-689q0 50-31.5 81.5T622-576H106Zm664 309v-24q28-8 45-31t17-56q0-40-25.5-65T742-468H106v-22h636q50 0 81 31.5t31 80.5q0 42-22 72t-62 39Z" />
    </svg>
  );
};

export default MorningIcon;
