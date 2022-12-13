import { Title } from '../../../ui/title';

type GroupDescriptionProps = {
  description: string;
};

export const GroupDescription = ({ description }: GroupDescriptionProps) => {
  return (
    <div className="group-about__description">
      <Title label="About" />
      <p>{description}</p>
    </div>
  );
};
