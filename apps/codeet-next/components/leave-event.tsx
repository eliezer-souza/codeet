'use client';

import { useMutation } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from './ui/toaster';

type LeaveEventProps = {
  eventId: string;
};

export default function LeaveEvent({
  eventId,
}: LeaveEventProps) {
  const router = useRouter();

  const { mutate, isLoading } = useMutation(
    () =>
      fetch(`/api/events/${eventId}/leave-event`, {
        method: 'POST',
      }),
    {
      onSuccess: () => {
        toast.success('Your left the event.');
        router.refresh();
      },
    }
  );

  return (
    <button
      onClick={() => mutate()}
      className="w-full h-11 inline-flex justify-center items-center rounded-md border border-slate-200 bg-white px-8 py-2 font-medium text-slate-900 transition-colors hover:bg-red-100 hover:border-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    >
      {isLoading && (
        <Loader2 width={16} height={16} className="mr-2 animate-spin" />
      )}
      Leave the event
    </button>
  );
}
