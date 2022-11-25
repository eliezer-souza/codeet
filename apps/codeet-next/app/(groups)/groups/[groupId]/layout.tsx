import { GroupCommands } from '@codeet/domain';
import Info from '../../../../modules/group/components/Header/Info';
import Link from 'next/link';

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
      <div className="bg-slate-300 h-96">

      </div>
      {/* Sub-menu items */}
      <Info group={data} totalEvents={totalEvents} totalMembers={totalMembers} />
      {/* Page body */}
      <div className="container my-10">
        <div className="flex flex-col gap-10 px-8 sm:px-0">
          <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">Select your country</label>
              <select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary block w-full p-2.5">
                  <option>Profile</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
              </select>
          </div>
          <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex">
              <li className="w-full">
                  <Link href={`groups/${groupId}`} className="inline-block p-4 w-full text-white bg-primary rounded-l-lg focus:ring-primary active focus:outline-none" aria-current="page">About us</Link>
              </li>
              <li className="w-full">
                  <Link href={`groups/${groupId}/events`} className="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-primary focus:outline-none">Events</Link>
              </li>
              <li className="w-full">
                  <Link href={`groups/${groupId}/members`} className="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-primary focus:outline-none">Members</Link>
              </li>
          </ul>
          {children}
        </div>
      </div>
    </div>
  )
};
