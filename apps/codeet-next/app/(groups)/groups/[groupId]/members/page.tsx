import { MemberCommands } from '@codeet/domain';
import { Search, Users } from 'lucide-react';

import { MembersGrid } from '../../../../../components/group/Members/MembersGrid';
import Empty from '../../../../../components/ui/empty';

type GroupMembersProps = {
  params: { groupId: string };
};

export default async function GroupMembers({
  params: { groupId },
}: GroupMembersProps) {
  const { data } = await MemberCommands.getMembersByGroup({ groupId });

  return (
    <div className="group-members flex flex-col">
      <div className="flex flex-col gap-6">
        <h1 className="text-xl font-bold leading-[1.1] sm:text-2xl md:text-4xl text-primary">
          Members
        </h1>
        {data.length === 0 ? (
          <Empty
            icon={Users}
            title="No members"
            description="This group has no members."
          />
        ) : (
          <>
            <div className="border border-slate-300 py-2 px-3 inline-flex items-center bg-white rounded-md p-3 hover:border-slate-400 w-full h-11">
              <Search
                width={18}
                height={18}
                className="mr-2 h-full flex items-center justify-center stroke-slate-400"
              />
              <input
                className="text-lg placeholder:text-slate-400 outline-none w-full h-full truncate"
                placeholder="Search..."
              />
            </div>
            <MembersGrid users={data} />
          </>
        )}
      </div>
    </div>
  );
}
