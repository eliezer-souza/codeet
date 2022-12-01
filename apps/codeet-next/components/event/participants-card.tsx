'use client';

import { Participant, User } from '@prisma/client';
import { Users } from 'lucide-react';
import { DropdownMenu } from '../ui/dropdown';
import { ScrollArea } from '../ui/scrollarea';
import UserAvatar from '../user-avatar';

type ParticipantsCardProps = {
  participants: (Participant & {
    user: User;
  })[];
};

export default function ParticipantsCard({
  participants,
}: ParticipantsCardProps) {
  const [firstParticipant, secondParticipant, thirdParticipant, ...rest] =
    participants;

  return (
    <div className="flex">
      {firstParticipant && (
        <UserAvatar
          name={firstParticipant.user.name}
          image={firstParticipant.user.image}
          className="h-8 w-8 rounded-full bg-red-300 border-4 border-white"
        />
      )}
      {secondParticipant && (
        <UserAvatar
          name={secondParticipant.user.name}
          image={secondParticipant.user.image}
          className="relative h-8 w-8 rounded-full bg-purple-300 border-4 border-white left-[-12px]"
        />
      )}
      {thirdParticipant && (
        <UserAvatar
          name={thirdParticipant.user.name}
          image={thirdParticipant.user.image}
          className="relative h-8 w-8 rounded-full bg-green-300 border-4 border-white left-[-24px]"
        />
      )}
      {rest.length > 0 && (
        <DropdownMenu>
          <DropdownMenu.Trigger className="focus-visible:outline-none">
            <div className="relative h-8 w-20 rounded-3xl bg-slate-200 border-4 border-white left-[-36px] text-sm text-slate-600 flex justify-center items-center">{`+${rest.length} more`}</div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="mt-2 md:w-[240px] p-4"
              align="end"
            >
              <div className="mb-3 flex gap-4 p-2">
                <div className="h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center p-2">
                  <Users width={12} height={12} className='stroke-slate-500 min-w-min' />
                </div>
                <p className="text-md text-slate-500">
                  {rest.length} Attendees
                </p>
              </div>
              <ScrollArea>
                <ScrollArea.Viewport>
                  <div className="flex flex-col gap-4">
                    {rest.map(({ user }) => (
                      <>
                        <div
                          className="flex items-center justify-center gap-4 p-2"
                          key={user.id}
                        >
                          <UserAvatar
                            name={user.name}
                            image={user.image}
                            className="h-6 w-6 min-w-[24px] rounded-full"
                          />
                          <p className="text-sm w-full">{user.name}</p>
                        </div>
                        <hr className="border-slate-100" />
                      </>
                    ))}
                  </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="vertical">
                  <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
                <ScrollArea.Scrollbar orientation="horizontal">
                  <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner />
              </ScrollArea>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu>
      )}
    </div>
  );
}
