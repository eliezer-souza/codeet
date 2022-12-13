import { Event } from '@codeet/domain';

import EventCard, { Venue } from '../../event-card';

type EventsGridProps = {
  events: Event[];
};

export const EventsGrid = ({ events }: EventsGridProps) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {events?.map((event) => (
        <EventCard
        id={event.id}
          key={event.id}
          name={event.name}
          date={event.date}
          venue={event.venue as Venue}
        />
      ))}
    </div>
  );
};
