type TitleProps = {
  label: string
};

export const Title = ({ label }: TitleProps) => {
  return (
    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3">
      {label}
    </h2>
  )
};
