'use client';

import { useMutation } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { toast } from './ui/toaster';

type JoinGroupProps = {
  groupId: string;
};

export default function JoinGroup({ groupId }: JoinGroupProps) {
  const router = useRouter();
  const { data: session } = useSession();

  const { mutate, isLoading } = useMutation(
    () =>
      fetch(`/api/groups/${groupId}/join-group`, {
        method: 'POST',
      }),
    {
      onSuccess: () => {
        toast.success('Congratulations! You are now a member of the group.');
        router.refresh();
      },
    }
  );

  const handleJoinGroup = () => {
    if (!session?.user) {
      router.push(`/login?from=/groups/${groupId}`);
    } else {
      mutate();
    }
  };

  return (
    <button
      onClick={handleJoinGroup}
      disabled={isLoading}
      className="w-full h-11 inline-flex justify-center items-center rounded-md border border-transparent bg-primary px-8 py-2 font-medium text-white hover:bg-lightPrimary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
    >
      {isLoading && (
        <Loader2 width={16} height={16} className="mr-2 animate-spin" />
      )}
      Join this group
    </button>
  );
}
