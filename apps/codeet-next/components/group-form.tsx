'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Loader2, Save } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { toast } from './ui/toaster';

const groupSchema = z.object({
  name: z.string().min(3).max(32),
  description: z.string().min(3),
  details: z.string().min(3),
});

type GroupHookForm = z.infer<typeof groupSchema>;

type GroupFormProps =
  | ({
      groupId: string;
      isEdit: true;
    } & Required<GroupHookForm>)
  | ({
      groupId?: string;
      isEdit: false;
    } & GroupHookForm);

export default function GroupForm({
  groupId,
  name,
  description,
  details,
  isEdit,
}: GroupFormProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GroupHookForm>({
    resolver: zodResolver(groupSchema),
    defaultValues: {
      name,
      description,
      details,
    },
  });

  const createGroup = useMutation(
    ({ name, description, details }: GroupHookForm) =>
      fetch(`/api/groups/create`, {
        method: 'POST',
        body: JSON.stringify({
          name,
          description,
          details,
          groupId,
        }),
      }),
    {
      onSuccess: async (data) => {
        const group = await data.json();

        toast.success('Your group has been created.');
        router.push(`/groups/${group['id']}`);
      },
    }
  );

  const editGroup = useMutation(
    ({ name, description, details }: GroupHookForm) =>
      fetch(`/api/groups/${groupId}/edit`, {
        method: 'PATCH',
        body: JSON.stringify({
          name,
          description,
          details,
        }),
      }),
    {
      onSuccess: () => {
        toast.success('Your group has been updated.');
        router.push(`/groups/${groupId}`);
      },
    }
  );

  const handleActionGroup = (group: GroupHookForm) => {
    if (isEdit) {
      editGroup.mutate({ ...group });
    } else {
      createGroup.mutate({ ...group });
    }
  };

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(handleActionGroup)}
    >
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Group Name</h4>
        <p className="text-sm text-slate-500">Please enter group name.</p>
        <input
          id="name"
          name="name"
          className="text-lg placeholder:text-slate-400 outline-none w-full max-w-lg h-11 truncate border border-slate-300 bg-white rounded-md hover:border-slate-400 pl-4 relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          placeholder="Enter group name"
          {...register('name')}
        />
        {errors?.name && (
          <p className="px-1 text-xs text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Description</h4>
        <p className="text-sm text-slate-500">
          Please enter group description.
        </p>
        <input
          id="description"
          name="description"
          className="text-lg placeholder:text-slate-400 outline-none w-full max-w-lg h-11 truncate border border-slate-300 bg-white rounded-md hover:border-slate-400 pl-4 relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          placeholder="Enter group description"
          {...register('description')}
        />
        {errors?.description && (
          <p className="px-1 text-xs text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Details</h4>
        <p className="text-sm text-slate-500">Please enter group details.</p>
        <textarea
          id="details"
          name="details"
          className="text-lg placeholder:text-slate-400 outline-none w-full max-w-lg h-11 truncate border border-slate-300 bg-white rounded-md hover:border-slate-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          placeholder="Enter group details"
          {...register('details')}
        />
        {errors?.details && (
          <p className="px-1 text-xs text-red-600">{errors.details.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="inline-flex w-full md:w-32 justify-center items-center rounded-md border border-transparent bg-primary px-8 py-2 font-medium text-white hover:bg-lightPrimary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        disabled={editGroup.isLoading || createGroup.isLoading}
      >
        {editGroup.isLoading || createGroup.isLoading ? (
          <Loader2 width={16} height={16} className="mr-2 animate-spin" />
        ) : (
          <Save width={16} height={16} className="mr-2" />
        )}
        Save
      </button>
    </form>
  );
}
