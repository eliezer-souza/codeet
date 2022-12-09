import { Event } from '@codeet/domain';

import { EventsGrid } from './EventsGrid';
import { Title } from '../../ui/title';

type EventsProps = {
  events: {
    data: Event[];
    count: number;
  },
};

export const Events = ({ events: { data, count } }: EventsProps) => {
  return (
    <div className="group-events">
      <Title label={`Upcoming Events (${count})`} />
      <EventsGrid events={data} />
    </div>
  );
};
