'use client';

import * as Avatar from '@radix-ui/react-avatar';
import { getUserSession } from '../lib/session';

type UserNavProps = Awaited<ReturnType<typeof getUserSession>>;

export default function UserNav({ image, name }: UserNavProps) {
  return (
    <Avatar.Root className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-300">
      <Avatar.Image src={image} alt="Colm Tuite" />
      <Avatar.Fallback delayMs={600}>
        {name.charAt(0).toUpperCase()}
      </Avatar.Fallback>
    </Avatar.Root>
  );
}
