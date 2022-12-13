type GroupDescriptionProps = {
  description: string;
};

export const GroupDescription = ({ description }: GroupDescriptionProps) => {
  return (
    <div className="group-about__description">
      <h1 className="text-xl font-bold leading-[1.1] sm:text-2xl md:text-4xl text-primary">
        About
      </h1>
      <p>{description}</p>
    </div>
  );
};
