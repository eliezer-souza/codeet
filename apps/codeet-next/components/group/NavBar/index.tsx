'use client'

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import cn from 'classnames';
import React from 'react';

const groupNav = [
  {
    name: 'About Us',
    url: (groupId: string) => `/groups/${groupId}`
  },
  {
    name: 'Events',
    url: (groupId: string) => `/groups/${groupId}/events`
  },
  {
    name: 'Members',
    url: (groupId: string) => `/groups/${groupId}/members`
  }
]

type NavBarProps = {
  groupId: string;
};

export default function NavBar({ groupId }: NavBarProps) {
  const path = usePathname();
  const { push } = useRouter();

  const handleChangeSelectMenu = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    push(evt.target.value)
  }

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">Select your country</label>
        <select
          id="tabs"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary block w-full p-2.5"
          onChange={handleChangeSelectMenu}
        >
            {groupNav.map((nav, index) => (
              <option
                key={index}
                value={nav.url(groupId)}
                selected={nav.url(groupId) === path}
              >
                {nav.name}
              </option>
            ))}
        </select>
      </div>
      <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex">
        {groupNav.map((nav, index) => (
          <li className="w-full" key={index}>
            <Link
              href={nav.url(groupId)}
              className={cn(
                "inline-block p-4 w-full bg-white focus:ring-primary active focus:outline-none",
                nav.url(groupId) === path && "bg-primary text-white",
                nav.url(groupId) !== path && "hover:text-gray-700 hover:bg-gray-50", {
                  "rounded-l-lg": index === 0,
                  "rounded-r-lg": index === groupNav.length-1
                }
              )}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
