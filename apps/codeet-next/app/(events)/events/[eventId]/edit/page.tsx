import { EventCommands } from '@codeet/domain';
import { redirect } from 'next/navigation';

import EventForm from '../../../../../components/event-form';
import Back from '../../../../../components/ui/back';
import { getUserSession } from '../../../../../lib/session';

type EventEditProps = {
  params: { eventId: string };
};

export default async function EventEdit({
  params: { eventId },
}: EventEditProps) {
  const user = await getUserSession();

  const {
    data: { id, name, details, date, venue, groupId },
  } = await EventCommands.getEventById({ id: eventId });

  const { data: verifyUserIsAdministratorOfEvent } =
    await EventCommands.verifyUserIsAdministratorOfEvent({
      eventId,
      userId: user?.id,
    });

  if (!verifyUserIsAdministratorOfEvent?.isEventAdministrator) {
    redirect(`/events/${eventId}`);
  }

  if (!user) {
    redirect('/login');
  }

  return (
    <section className="container flex items-center justify-center gap-6 p-8 md:py-12 lg:pt-24">
      <div className="flex flex-col items-start gap-4 md:max-w-[960px] w-full">
        <Back />
        <h1 className="text-xl font-bold leading-[1.1] sm:text-2xl md:text-4xl">
          Edit event
        </h1>
        <EventForm
          isEdit
          eventId={id}
          name={name}
          details={details}
          date={String(date)}
          venue={venue as { street: string }}
          groupId={groupId}
        />
      </div>
    </section>
  );
}
