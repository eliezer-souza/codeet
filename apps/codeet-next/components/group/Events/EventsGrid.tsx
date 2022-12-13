import { Event } from '@codeet/domain';

import { EventCard } from './EventCard';

type EventsGridProps = {
  events: Event[];
};

export const EventsGrid = ({ events }: EventsGridProps) => {
  return (
    <div className="gap-3 grid grid-cols-1 sm:grid-cols-fill-400">
      {events?.map((event) => (<EventCard key={event.id} event={event} />))}
    </div>
  )
};
