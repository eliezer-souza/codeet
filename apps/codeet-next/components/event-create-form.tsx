'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Loader2, Save } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import DatePicker from './ui/datepicker';
import { toast } from './ui/toaster';

const eventCreateSchema = z.object({
  name: z.string().min(3).max(32),
  details: z.string().min(3),
  date: z.date(),
  venue: z.object({
    street: z.string().min(1),
  }),
});

type EventForm = z.infer<typeof eventCreateSchema>;

type EventCreateFormProps = {
  groupId: string;
};

export default function EventCreateForm({ groupId }: EventCreateFormProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EventForm>({
    resolver: zodResolver(eventCreateSchema),
    defaultValues: {
      date: new Date(),
    },
  });

  const { mutate, isLoading } = useMutation(
    ({ name, details, date, venue }: EventForm) =>
      fetch(`/api/events/create`, {
        method: 'POST',
        body: JSON.stringify({
          name,
          details,
          date,
          venue,
          groupId,
        }),
      }),
    {
      onSuccess: async (data) => {
        const event = await data.json();

        toast.success('Your event has been created.');
        router.push(`/events/${event['id']}`);
      },
    }
  );

  const handleEditUser = (user: EventForm) => {
    mutate({ ...user });
  };

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(handleEditUser)}
    >
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Event Name</h4>
        <p className="text-sm text-slate-500">Please enter event name.</p>
        <input
          id="name"
          name="name"
          className="text-lg placeholder:text-slate-400 outline-none w-full max-w-lg h-11 truncate border border-slate-300 bg-white rounded-md hover:border-slate-400 pl-4 relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          placeholder="Enter event name"
          {...register('name')}
        />
        {errors?.name && (
          <p className="px-1 text-xs text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Date</h4>
        <p className="text-sm text-slate-500">Please enter event date.</p>
        <div className="w-full max-w-lg h-11 sticky">
          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <DatePicker
                placeholderText="Select date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                minDate={new Date()}
              />
            )}
          />
        </div>
        {errors?.date && (
          <p className="px-1 text-xs text-red-600">{errors.date.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Details</h4>
        <p className="text-sm text-slate-500">Please enter event details.</p>
        <textarea
          id="details"
          name="details"
          className="text-lg placeholder:text-slate-400 outline-none w-full max-w-lg h-11 truncate border border-slate-300 bg-white rounded-md hover:border-slate-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          placeholder="Enter event details"
          {...register('details')}
        />
        {errors?.details && (
          <p className="px-1 text-xs text-red-600">{errors.details.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Venue</h4>
        <p className="text-sm text-slate-500">
          Please enter event venue street.
        </p>
        <input
          id="venue.street"
          name="venue.street"
          className="text-lg placeholder:text-slate-400 outline-none w-full max-w-lg h-11 truncate border border-slate-300 bg-white rounded-md hover:border-slate-400 p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          placeholder="Enter venue street"
          {...register('venue.street')}
        />
        {errors?.venue?.street && (
          <p className="px-1 text-xs text-red-600">
            {errors.venue.street.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="inline-flex w-full md:w-32 justify-center items-center rounded-md border border-transparent bg-primary px-8 py-2 font-medium text-white hover:bg-lightPrimary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 width={16} height={16} className="mr-2 animate-spin" />
        ) : (
          <Save width={16} height={16} className="mr-2" />
        )}
        Save
      </button>
    </form>
  );
}
