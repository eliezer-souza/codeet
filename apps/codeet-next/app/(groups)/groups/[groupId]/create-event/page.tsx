import { redirect } from 'next/navigation';

import EventForm from '../../../../../components/event-form';
import { getUserSession } from '../../../../../lib/session';

type EventCreateProps = {
  params: { groupId: string };
};

export default async function EventCreate({
  params: { groupId },
}: EventCreateProps) {
  const user = await getUserSession();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className='flex flex-col gap-6'>
      <h1 className="text-xl font-bold leading-[1.1] sm:text-2xl md:text-4xl">
        Create event
      </h1>
      <EventForm isEdit={false} groupId={groupId} />
    </div>
  );
}
