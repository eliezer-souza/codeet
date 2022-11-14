import { Calendar, MapPin } from 'lucide-react';

export type Venue = {
  street: string;
  number: number;
  city: string;
  country: string;
  zipcode: string;
};

export type EventCardProps = {
  id: string;
  name: string;
  date: Date;
  venue: Venue;
};

export default function EventCard({ name, date, venue }: EventCardProps) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(date);

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-80 bg-white rounded-md p-5 border border-slate-300">
      <div className="flex justify-center items-center w-12 h-12 bg-slate-300 text-slate-600 rounded-md font-bold text-4xl">
        {name.charAt(0).toUpperCase()}
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold text-lg whitespace-pre-wrap leading-none text-center">
          {name}
        </p>
        <hr className="border-slate-100" />
        <div className="flex items-center">
          <Calendar
            width={16}
            height={16}
            className="stroke-primary min-w-min"
          />
          <p className="ml-2 text-sm whitespace-pre-wrap leading-none text-slate-500">
            {formattedDate}
          </p>
        </div>
        <div className="flex items-center">
          <MapPin width={16} height={16} className="stroke-primary min-w-min" />
          <p className="ml-2 text-sm whitespace-pre-wrap leading-none text-slate-500">
            {venue.street}
          </p>
        </div>
        <button className="elative inline-flex h-11 items-center justify-center rounded-md border border-slate-200 bg-white px-8 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
          More Details
        </button>
      </div>
    </div>
  );
}
