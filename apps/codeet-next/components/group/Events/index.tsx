import { Event } from '@codeet/domain';
import { CalendarDays } from 'lucide-react';

import { EventsGrid } from './EventsGrid';
import { Title } from '../../ui/title';
import Empty from '../../ui/empty';

type EventsProps = {
  events: {
    data: Event[];
    count: number;
  };
};

export const Events = ({ events: { data, count } }: EventsProps) => {
  return (
    <div className="group-events">
      <Title label={`Upcoming Events (${count})`} />
      {data.length === 0 ? (
        <Empty
          icon={CalendarDays}
          title="No upcoming events"
          description="This group does not have any upcoming events."
        />
      ) : (
        <EventsGrid events={data} />
      )}
    </div>
  );
};
