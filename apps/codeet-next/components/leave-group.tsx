'use client';

import { useMutation } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from './ui/toaster';

type LeaveGroupProps = {
  groupId: string;
};

export default function LeaveGroup({
  groupId,
}: LeaveGroupProps) {
  const router = useRouter();

  const { mutate, isLoading } = useMutation(
    () =>
      fetch(`/api/groups/${groupId}/leave-group`, {
        method: 'POST',
      }),
    {
      onSuccess: () => {
        toast.success('Your left the group.');
        router.refresh();
      },
    }
  );

  return (
    <button
      onClick={() => mutate()}
      disabled={isLoading}
      className="w-full h-11 inline-flex justify-center items-center rounded-md border border-slate-200 bg-white px-8 py-2 font-medium text-slate-900 transition-colors hover:bg-red-100 hover:border-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
    >
      {isLoading && (
        <Loader2 width={16} height={16} className="mr-2 animate-spin" />
      )}
      Leave the group
    </button>
  );
}
