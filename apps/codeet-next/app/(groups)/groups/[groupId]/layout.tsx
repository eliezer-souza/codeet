import { GroupCommands } from '@codeet/domain';
import { Banner, Info, NavBar } from '../../../../components/group';

type GroupDetailLayoutProps = {
  params: { groupId: string };
  children: React.ReactNode;
};

export default async function GroupDetailLayout({ children, params: { groupId }}: GroupDetailLayoutProps) {
  const { data } = await GroupCommands.getGroupById({ id: groupId });

  const totalEvents = data._count.event;
  const totalMembers = data._count.member;

  return (
    <div className="flex flex-col bg-background">
      {/* Image container */}
      <Banner />
      {/* Sub-menu items */}
      <Info group={data} totalEvents={totalEvents} totalMembers={totalMembers} />
      {/* Page body */}
      <div className="container my-10">
        <div className="flex flex-col gap-10 px-8 sm:px-0">
          <NavBar groupId={groupId} />
          {children}
        </div>
      </div>
    </div>
  )
};
