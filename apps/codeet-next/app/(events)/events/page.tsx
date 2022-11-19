import { EventCommands } from '@codeet/domain';
import { Search } from 'lucide-react';

import EventCard, { Venue } from '../../../components/event-card';

export default async function EventsPage() {
  const events = await EventCommands.getAllEvents(null);

  return (
    <section className="container flex items-center justify-center gap-6 p-8 md:py-12 lg:pt-24">
      <div className="flex flex-col items-start gap-4 md:max-w-[960px] w-full">
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
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-8 gap-4">
          {events.data?.map(({ id, name, date, venue }) => (
            <EventCard
              key={id}
              id={id}
              name={name}
              date={date}
              venue={venue as Venue}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
