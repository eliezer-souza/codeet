import { Group } from "@prisma/client"

type InfoProps = {
  group: Group;
  totalMembers: number;
  totalEvents: number;
}

export default function Info({ group, totalEvents, totalMembers }: InfoProps) {
  return (
    <div className="bg-white shadow-sm">
      <div className="container flex flex-col gap-5 sm:gap-0 sm:flex-row items-center mx-auto py-7">
        <div className="flex-none bg-red-600 w-44 h-44 rounded-md -mt-28 mr-4"></div>
        <div className="flex flex-col gap-3 sm:gap-10 sm:flex-row lg:gap-20 md:flex-1 items-center">
          <div className="flex flex-col flex-grow">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary">{group.name}</h2>
            <span className="text-sm text-slate-400">{group.description}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="uppercase text-lg text-slate-400">Members</span>
            <span className="text-2xl md:text-4xl font-bold text-primary">{totalMembers}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="uppercase text-lg text-slate-400">Events</span>
            <span className="text-2xl md:text-4xl font-bold text-primary">{totalEvents}</span>
          </div>
          <button className="rounded-md border border-transparent bg-primary px-8 py-2 font-medium text-white hover:bg-lightPrimary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            Join this group
          </button>
        </div>
      </div>
    </div>
  )
};
