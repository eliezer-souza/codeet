import { redirect } from 'next/navigation';

import Back from '../../../../../components/ui/back';
import UserEditForm from '../../../../../components/user-edit-form';
import { getUserSession } from '../../../../../lib/session';

type UserEditProps = {
  params: { userId: string };
};

export default async function UserEdit({ params: { userId } }: UserEditProps) {
  const user = await getUserSession();

  if (!user) {
    redirect('/login');
  }

  return (
    <section className="container flex items-center justify-center gap-6 p-8 md:py-12 lg:pt-24">
      <div className="flex flex-col items-start gap-6 md:max-w-[960px] w-full">
        <Back />
        <h1 className="text-xl font-bold leading-[1.1] sm:text-2xl md:text-4xl">
          Edit account
        </h1>
        <UserEditForm name={user.name} id={user.id} />
      </div>
    </section>
  );
}
