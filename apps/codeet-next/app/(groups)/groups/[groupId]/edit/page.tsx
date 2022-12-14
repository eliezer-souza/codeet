import { GroupCommands } from '@codeet/domain';
import { redirect } from 'next/navigation';

import GroupForm from '../../../../../components/group-form';
import { getUserSession } from '../../../../../lib/session';

type EditGroupProps = {
  params: { groupId: string };
};

export default async function EditGroup({
  params: { groupId },
}: EditGroupProps) {
  const user = await getUserSession();
  const { data } = await GroupCommands.getGroupById({ id: groupId });

  const { data: verifyUserIsAdministratorOfGroup } =
  await GroupCommands.verifyUserIsAdministratorOfGroup({
    groupId,
    userId: user?.id,
  });
  
  if (!verifyUserIsAdministratorOfGroup?.isGroupAdministrator) {
    redirect(`/groups/${groupId}`)
  }

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-bold leading-[1.1] sm:text-2xl md:text-4xl">
        Edit group
      </h1>
      <GroupForm
        isEdit
        groupId={groupId}
        name={data.name}
        description={data.description}
        details={data.details}
      />
    </div>
  );
}
