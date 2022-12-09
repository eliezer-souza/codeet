import { EventCommands } from '@codeet/domain';
import { Search } from 'lucide-react';

import { Title } from '../../../../../components/ui/title';
import { EventsGrid } from '../../../../../components/group/Events/EventsGrid';

type GroupEventsProps = {
  params: { groupId: string };
};

export default async function GroupEvents ({ params: { groupId }}: GroupEventsProps) {
  const { data } = await EventCommands.getEventsByGroup({ groupId });

  return (
    <div className="group-events flex flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold leading-[1.1] sm:text-2xl md:text-4xl">
          Events
        </h1>
        <div className="border border-slate-300 py-2 px-3 inline-flex items-center bg-white rounded-md p-3 hover:border-slate-400 w-full h-11">
          <Search
            width={18}
            height={18}
            className="mr-2 h-full flex items-center justify-center stroke-slate-400"
          />
          <input
            className="text-lg placeholder:text-slate-400 outline-none w-full h-full truncate"
            placeholder="Search..."
          />
        </div>
        <div className="mt-10">
          <Title label="Upcoming Events" />
          <EventsGrid events={data} />
        </div>
      </div>
    </div>
  );
};
