import { GroupCommands } from '@codeet/domain';
import { AboutUs } from '../../../../components/group';

type GroupAboutProps  = {
  params: { groupId: string };
};

export default async function GroupAbout({ params: { groupId }}: GroupAboutProps) {
  const { data } = await GroupCommands.getGroupDetails({ id: groupId });
  const { member, event, _count, ...group } = data;
  return (
    <div className="group-about flex flex-col gap-10">
      <AboutUs
        events={{ data: event, count: _count.event }}
        members={{ users: member, count: _count.member }}
        group={group}
      />
    </div>
  )
};
