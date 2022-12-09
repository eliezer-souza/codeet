import Link from 'next/link';

import { Event } from '@codeet/domain';
import { Calendar, MapPin  } from 'lucide-react';

import { formatFullDate } from '../../../utils/data';

type Venue = {
  street: string;
  number: number;
  city: string;
  country: string;
  zipcode: string;
};

type EventCardProps = {
  event: Event;
};

export const EventCard = ({ event }: EventCardProps) => {
  const { id, name, date, venue } = event;
  const typedVenue = venue as Venue;

  return (
    <Link href={`/events/${id}`} className="bg-white flex flex-col gap-5 md:gap-0 md:flex-row p-4 rounded-md">
      <div className="flex-none bg-slate-400 md:w-[160px] md:h[160px] md:mr-3 rounded-md">
        <img
          src="https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F508624315%2F676x380.webp&w=3840&q=75"
          alt="Event Image"
          className="object-cover w-full h-full rounded-md"
          width="100%"
          height="100%"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-primary text-2xl font-bold mb-3">{name}</h2>

        <div className="flex items-center">
          <Calendar width={16} height={16} className="flex-none stroke-primary mr-1" />
          <p className="ml-2 text-sm whitespace-pre-wrap leading-none text-slate-500">
            {formatFullDate(date)}
          </p>
        </div>

        <div className="flex items-center">
          <MapPin width={16} height={16} className="flex-none stroke-primary mr-1" />
          <p className="ml-2 text-sm whitespace-pre-wrap leading-none text-slate-500">
            {typedVenue.street}
          </p>
        </div>

      </div>
    </Link>
  );
};
