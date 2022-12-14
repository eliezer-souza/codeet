import { Plus, Search, Users } from 'lucide-react';
import { GroupCommands } from '@codeet/domain';

import GroupCard from '../../../components/group-card';
import Empty from '../../../components/ui/empty';
import Link from 'next/link';

export default async function GroupsPage() {
  const groups = await GroupCommands.getAllGroups(null);

  return (
    <section className="container flex items-center justify-center gap-6 p-8 md:py-12 lg:pt-24">
      <div className="flex flex-col items-start gap-4 md:max-w-[960px] w-full">
        <div className='flex justify-between w-full items-center'>
          <h1 className="text-xl font-bold leading-[1.1] sm:text-2xl md:text-4xl">
            Groups
          </h1>
          <Link
            href="/groups/create"
            rel="noreferrer"
            className="relative inline-flex h-11 items-center rounded-md border border-slate-200 bg-white px-8 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Plus width={16} height={16} className="mr-2" />
            Create group
          </Link>
        </div>
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
        {groups.data.length === 0 && (
          <Empty
            icon={Users}
            title="No groups created"
            description="You don't have any groups yet. Start creating groups now."
          />
        )}
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-8 gap-4">
          {groups.data.map(({ id, name }) => (
            <GroupCard key={id} id={id} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
