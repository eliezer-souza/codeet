import { User } from '@codeet/domain';

import { Member } from './Member';

type MembersGridProps = {
  users: {
    user: User;
  }[];
};

export const MembersGrid = ({ users }: MembersGridProps) => {
  return (
    <div className="grid grid-flow-col gap-6 sm:grid-flow-row sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 overflow-auto sm:overflow-hidden">
      {users.map(({ user }) => (
        <Member
          key={user.id}
          userId={user.id}
          photo={user.image}
          name={user.name}
        />
      ))}
    </div>
  );
};
