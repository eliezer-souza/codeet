import { Group } from '@prisma/client';
import Avatar from '../../../../components/user-avatar';

type InfoProps = {
  group: Group;
};

export default function Info({ group }: InfoProps) {
  const { name, urlLogo } = group;

  return (
    <div className="container flex flex-col gap-6 sm:gap-0 sm:flex-row items-center">
      <Avatar
        name={name}
        image={urlLogo}
        className="flex-none w-44 h-44 rounded-md mr-4 text-5xl"
      />
      <div className="flex flex-col gap-6 sm:gap-10 sm:flex-row lg:gap-20 md:flex-1 items-center">
        <div className="flex flex-col flex-grow">
          <div className='flex flex-col-reverse gap-6 justify-between items-center sm:flex-row'>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary">
              {group.name}
            </h2>
            <button className="rounded-md w-full border border-transparent bg-primary px-8 py-2 font-medium text-white hover:bg-lightPrimary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto">
              Join this group
            </button>
          </div>
          <span className="text-sm text-slate-400 mt-4">{group.description}</span>
        </div>
      </div>
    </div>
  );
}
