interface HeadingProps {
  title: string;
}

const SectionHeading = ({ title }: HeadingProps) => {
  return (
    <div>
      <h2 className="relative mx-auto my-2 max-w-[31.25em] text-center">
        <span className="relative z-10 inline-block">{title}</span>
        <span className="section-heading-left"></span>
        <span className="section-heading-right"></span>
      </h2>
    </div>
  );
};

export default SectionHeading;
