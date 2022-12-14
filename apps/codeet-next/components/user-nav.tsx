'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { getUserSession } from '../lib/session';
import { DropdownMenu } from './ui/dropdown';
import UserAvatar from './user-avatar';

type UserNavProps = { id: string } & Awaited<ReturnType<typeof getUserSession>>;

export default function UserNav({ id, image, name, email }: UserNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger className="flex items-center gap-2 overflow-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2 focus-visible:outline-none">
        <UserAvatar
          className="h-8 w-8 rounded-full"
          name={name}
          image={image}
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="mt-2 md:w-[240px]" align="end">
          <div className="flex items-center justify-start gap-2 p-4">
            <div className="flex flex-col space-y-1 leading-none">
              {name && <p className="font-medium">{name}</p>}
              {email && (
                <p className="w-[200px] truncate text-sm text-slate-600">
                  {email}
                </p>
              )}
            </div>
          </div>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <Link href={`/user/${id}/profile`} className="w-full">
              Profile
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link href={`/user/${id}/edit`} className="w-full">
              Edit
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item
            className="cursor-pointer"
            onSelect={(event) => {
              event.preventDefault();
              signOut({
                callbackUrl: '/login',
              });
            }}
          >
            Sign out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu>
  );
}
