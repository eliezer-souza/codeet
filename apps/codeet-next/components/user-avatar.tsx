'use client';

import * as RadixAvatar from '@radix-ui/react-avatar';
import { cn } from '../lib/cn';

type UserAvatarProps = {
  name: string;
  image: string;
  className?: string;
};

export default function Avatar({
  name,
  image,
  className,
}: UserAvatarProps) {
  return (
    <RadixAvatar.Root
      className={cn(
        'flex items-center justify-center overflow-hidden bg-slate-300',
        className
      )}
    >
      <RadixAvatar.Image src={image} alt="Colm Tuite" />
      <RadixAvatar.Fallback delayMs={600}>
        {name.charAt(0).toUpperCase()}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
}
