import { GroupCommands } from '@codeet/domain';

import { NavBar } from '../../../../components/group';
import LeaveGroup from '../../../../components/leave-group';
import JoinGroup from '../../../../components/join-group';
import Avatar from '../../../../components/user-avatar';
import Back from '../../../../components/ui/back';
import { getUserSession } from '../../../../lib/session';

type GroupDetailLayoutProps = {
  params: { groupId: string };
  children: React.ReactNode;
};

export default async function GroupDetailLayout({
  children,
  params: { groupId },
}: GroupDetailLayoutProps) {
  const user = await getUserSession();

  const { data: group } = await GroupCommands.getGroupById({ id: groupId });

  const { data } = await GroupCommands.verifyUserIsMemberOfGroup({
    groupId,
    userId: user?.id,
  });

  return (
    <section className="container flex items-center justify-center gap-6 p-8 md:py-12 lg:pt-24">
      <div className="flex flex-col items-start gap-4 md:max-w-[960px] w-full">
        <Back />
        <div className="container flex flex-col gap-6 sm:gap-0 sm:flex-row items-center">
          <Avatar
            name={group.name}
            image={group.urlLogo}
            className="flex-none w-44 h-44 rounded-md mr-4 text-5xl"
          />
          <div className="flex flex-col gap-6 sm:gap-10 sm:flex-row lg:gap-20 md:flex-1 items-center">
            <div className="flex flex-col flex-grow">
              <div className="flex flex-col-reverse gap-6 justify-between items-center sm:flex-row">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary">
                  {group.name}
                </h2>
                {data?.isMember ? (
                  <LeaveGroup groupId={groupId} />
                ) : (
                  <JoinGroup groupId={groupId} />
                )}
              </div>
              <span className="text-sm text-slate-400 mt-4">
                {group.description}
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex flex-col gap-6 sm:px-0">
            <NavBar groupId={groupId} />
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
