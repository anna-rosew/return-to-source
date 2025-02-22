interface CallToActionProps {
  text: string;
}

export const CallToAction = ({ text }: CallToActionProps) => (
  <div className="md:mt-8 p-4 md:p-6">
    <p className="font-normal text-base text-customSienna">{text}</p>
  </div>
);
