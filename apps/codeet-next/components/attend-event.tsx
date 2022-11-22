'use client';

import { useMutation } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from './ui/toaster';

type AttendEventProps = {
  eventId: string;
};

export default function AttendEvent({ eventId }: AttendEventProps) {
  const router = useRouter();

  const { mutate, isLoading } = useMutation(
    () =>
      fetch(`/api/events/${eventId}/attend-event`, {
        method: 'POST',
      }),
    {
      onSuccess: () => {
        toast.success('Congratulations! You are registered for the event.');
        router.refresh();
      },
    }
  );

  return (
    <button
      onClick={() => mutate()}
      className="w-full h-11 inline-flex justify-center items-center rounded-md border border-transparent bg-primary px-8 py-2 font-medium text-white hover:bg-lightPrimary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      {isLoading && (
        <Loader2 width={16} height={16} className="mr-2 animate-spin" />
      )}
      Attend the event
    </button>
  );
}
