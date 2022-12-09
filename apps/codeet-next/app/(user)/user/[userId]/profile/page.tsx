import { UserCommands } from '@codeet/domain';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { CalendarDays, Users } from 'lucide-react';

import EventCard from '../../../../../components/event-card';
import GroupCard from '../../../../../components/group-card';
import UserAvatar from '../../../../../components/user-avatar';
import Empty from '../../../../../components/ui/empty';
import { getUserSession } from '../../../../../lib/session';

type UserProfileProps = {
  params: { userId: string };
};

export default async function UserProfile({
  params: { userId },
}: UserProfileProps) {
  const user = await getUserSession();
  const { data } = await UserCommands.getUserById({ id: userId });

  if (!user) {
    redirect('/login');
  }

  return (
    <section className="container flex items-center justify-center gap-6 p-8 md:py-12 lg:pt-24">
      <div className="flex flex-col items-start gap-6 md:max-w-[960px] w-full">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          <UserAvatar
            className="h-32 w-32 min-w-[128px] min-h-[128px] rounded-md"
            name={data.name}
            image={data.image}
          />
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <div>
              <h1 className="text-xl font-bold leading-[1.1] sm:text-2xl md:text-4xl text-primary text-center">
                {data.name}
              </h1>
              <p className="text-sm text-slate-400">{data.email}</p>
            </div>
            <Link
              href={`user/${data.id}/edit`}
              className="inline-flex h-11 w-full md:w-auto items-center justify-center rounded-md border border-slate-300 bg-white px-8 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Edit account
            </Link>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-lg font-bold leading-[1.1] sm:text-xl md:text-2xl mb-4">
            Your upcoming events
          </h2>
          {data.participant.length === 0 && (
            <Empty
              icon={CalendarDays}
              title="No upcoming events"
              description="You are not participating in any events recently. Join new events now."
            >
              <Link
                href="/events"
                rel="noreferrer"
                className="relative inline-flex h-11 items-center justify-center rounded-md border border-slate-200 bg-white px-8 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Explore events
              </Link>
            </Empty>
          )}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {data.participant.map((participant) => (
              <EventCard
                {...participant.event}
                key={participant.event.id}
                venue={{
                  street: participant.event.venue['street'],
                  city: participant.event.venue['city'],
                  number: participant.event.venue['number'],
                  country: participant.event.venue['country'],
                  zipcode: participant.event.venue['zipcode'],
                }}
              />
            ))}
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-lg font-bold leading-[1.1] sm:text-xl md:text-2xl mb-8">
            Your groups
          </h2>
          {data.member.length === 0 && (
            <Empty
              icon={Users}
              title="No groups"
              description="You are not a member of any group at the moment. Join new groups now."
            >
              <Link
                href="/groups"
                rel="noreferrer"
                className="relative inline-flex h-11 items-center justify-center rounded-md border border-slate-200 bg-white px-8 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Explore groups
              </Link>
            </Empty>
          )}
          <div className="w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {data.member.map((member) => (
              <GroupCard
                key={member.group.id}
                id={member.group.id}
                name={member.group.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
