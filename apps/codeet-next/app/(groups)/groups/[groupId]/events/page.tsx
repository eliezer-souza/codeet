import { EventCommands } from '@codeet/domain';
import { CalendarDays, Search } from 'lucide-react';

import { EventsGrid } from '../../../../../components/group/Events/EventsGrid';
import Empty from '../../../../../components/ui/empty';

type GroupEventsProps = {
  params: { groupId: string };
};

export default async function GroupEvents({
  params: { groupId },
}: GroupEventsProps) {
  const { data } = await EventCommands.getEventsByGroup({ groupId });

  return (
    <div className="group-events flex flex-col">
      <div className="flex flex-col gap-6">
        <h1 className="text-xl font-bold leading-[1.1] sm:text-2xl md:text-4xl text-primary">
          Events
        </h1>
        {data.length === 0 ? (
          <Empty
            icon={CalendarDays}
            title="No upcoming events"
            description="This group does not have any upcoming events."
          />
        ) : (
          <>
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
            <EventsGrid events={data} />
          </>
        )}
      </div>
    </div>
  );
}
