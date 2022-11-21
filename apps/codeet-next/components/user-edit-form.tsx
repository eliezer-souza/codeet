'use client';

import { User as UserType } from '@codeet/domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Loader2, Save, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { toast } from './ui/toaster';

const userEditSchema = z.object({
  name: z.string().min(3).max(32),
});

type UserForm = z.infer<typeof userEditSchema>;

type UserEditFormProps = Pick<UserType, 'id' | 'name'>;

export default function UserEditForm({ id, name }: UserEditFormProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: zodResolver(userEditSchema),
    defaultValues: {
      name,
    },
  });

  const { mutate, isLoading } = useMutation(
    ({ name }: UserForm) =>
      fetch(`/api/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          name,
        }),
      }),
    {
      onSuccess: () => {
        toast.success('Your account has been updated.');
        router.refresh();
      },
    }
  );

  const handleEditUser = (user: UserForm) => {
    mutate({ name: user.name });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleEditUser)}
    >
      <h4 className="font-bold">Your Name</h4>
      <p className="text-sm text-slate-500">
        Please enter your full name or a display name you are comfortable with.
      </p>
      <div className="w-full max-w-lg h-11 sticky">
        <User
          width={18}
          height={18}
          className="h-full flex items-center justify-center stroke-slate-400 absolute z-[1] mx-2"
        />
        <input
          id="name"
          name="name"
          className="text-lg placeholder:text-slate-400 outline-none w-full h-full truncate border border-slate-300 bg-white rounded-md hover:border-slate-400 relative pl-8 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          placeholder="Enter your name"
          {...register('name')}
        />
      </div>
      {errors?.name && (
        <p className="px-1 text-xs text-red-600">{errors.name.message}</p>
      )}
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
