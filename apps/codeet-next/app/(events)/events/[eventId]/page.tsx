import { EventCommands } from '@codeet/domain';
import { Calendar, MapPin } from 'lucide-react';

import AttendEvent from '../../../../components/attend-event';
import LeaveEvent from '../../../../components/leave-event';
import ParticipantsCard from '../../../../components/participants-card';
import Back from '../../../../components/ui/back';
import { getUserSession } from '../../../../lib/session';

type EventInformationProps = {
  params: { eventId: string };
};

export default async function EventInformation({
  params: { eventId },
}: EventInformationProps) {
  const user = await getUserSession();
  const {
    data: { name, details, date, venue, group, participant },
  } = await EventCommands.getEventById({ id: eventId });

  const { data } = await EventCommands.verifyUserIsParticipantOfEvent({
    eventId,
    userId: user?.id,
  });

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(date);

  return (
    <section className="container flex items-center justify-center gap-6 p-8 md:py-12 lg:pt-24">
      <div className="flex flex-col items-start gap-10 md:max-w-[960px] w-full">
        <Back />
        <div className="bg-slate-300 h-40 w-full rounded-md" />
        <div className="w-full flex flex-col-reverse md:flex-row gap-10">
          <div className="w-full flex flex-col gap-10">
            <h1 className="text-xl font-bold leading-[1.1] sm:text-2xl md:text-4xl">
              {name}
            </h1>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                About
              </h2>
              <p>{details}</p>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col gap-10 w-full">
            <div className="flex justify-center md:justify-start items-center">
              <ParticipantsCard participants={participant} />
            </div>
            {data?.isParticipant ? (
              <LeaveEvent eventId={eventId} />
            ) : (
              <AttendEvent eventId={eventId} />
            )}
            <div>
              <p className="uppercase text-sm text-slate-400">
                Date of the event
              </p>
              <div className="flex flex-col gap-4 items-center justify-center w-full h-32 bg-white rounded-md p-5 border border-slate-300">
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
                  <MapPin
                    width={16}
                    height={16}
                    className="stroke-primary min-w-min"
                  />
                  <p className="ml-2 text-sm whitespace-pre-wrap leading-none text-slate-500">
                    {venue['street']}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="uppercase text-sm text-slate-400">Organized By</p>
              <div className="flex gap-4 items-center justify-center w-full h-32 bg-white rounded-md p-5 border border-slate-300">
                <div className="flex justify-center items-center w-12 h-12 bg-slate-300 text-slate-600 rounded-md font-bold text-4xl">
                  {group.name.charAt(0).toUpperCase()}
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                  {group.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
