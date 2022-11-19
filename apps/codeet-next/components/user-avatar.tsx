'use client';

import * as Avatar from '@radix-ui/react-avatar';
import { cn } from '../lib/cn';

type UserAvatarProps = {
  name: string;
  image: string;
  className?: string;
};

export default function UserAvatar({
  name,
  image,
  className,
}: UserAvatarProps) {
  return (
    <Avatar.Root
      className={cn(
        'flex items-center justify-center overflow-hidden bg-slate-300',
        className
      )}
    >
      <Avatar.Image src={image} alt="Colm Tuite" />
      <Avatar.Fallback delayMs={600}>
        {name.charAt(0).toUpperCase()}
      </Avatar.Fallback>
    </Avatar.Root>
  );
}
