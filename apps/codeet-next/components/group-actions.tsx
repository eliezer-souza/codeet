'use client';

import { MoreVertical } from 'lucide-react';
import Link from 'next/link';

import { DropdownMenu } from './ui/dropdown';

type GroupActionsProps = { groupId: string };

export default function GroupActions({ groupId }: GroupActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger className="flex items-center gap-2 overflow-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2 focus-visible:outline-none">
        <MoreVertical />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="mt-2 md:w-[240px]" align="end">
          <DropdownMenu.Item>
            <Link href={`/groups/${groupId}/edit`} className="w-full">
              Edit
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link href={`/groups/${groupId}/create-event`} className="w-full">
              Create event
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu>
  );
}
