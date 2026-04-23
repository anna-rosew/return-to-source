interface CallToActionProps {
  text: string;
}

export const CallToAction = ({ text }: CallToActionProps) => (
  <div className="p-4 md:mt-8 md:p-6">
    <p className="text-base font-normal text-customSienna">{text}</p>
  </div>
);
