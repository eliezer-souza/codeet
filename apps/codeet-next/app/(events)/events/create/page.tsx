import { redirect } from 'next/navigation';

import EventForm from '../../../../components/event-form';
import Back from '../../../../components/ui/back';
import { getUserSession } from '../../../../lib/session';

type EventCreateProps = {
  searchParams: { groupId: string };
};

export default async function EventCreate({
  searchParams: { groupId },
}: EventCreateProps) {
  const user = await getUserSession();

  if (!user) {
    redirect('/login');
  }

  return (
    <section className="container flex items-center justify-center gap-6 p-8 md:py-12 lg:pt-24">
      <div className="flex flex-col items-start gap-4 md:max-w-[960px] w-full">
        <Back />
        <h1 className="text-xl font-bold leading-[1.1] sm:text-2xl md:text-4xl">
          Create event
        </h1>
        <EventForm isEdit={false} groupId={groupId} />
      </div>
    </section>
  );
}
