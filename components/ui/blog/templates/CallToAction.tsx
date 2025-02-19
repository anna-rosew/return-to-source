interface CallToActionProps {
  text: string;
}

export const CallToAction = ({ text }: CallToActionProps) => (
  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
    <p className="font-bold text-lg">{text}</p>
  </div>
);
