import { User } from '@codeet/domain';
import { Users } from 'lucide-react';

import { MembersGrid } from './MembersGrid';
import Empty from '../../ui/empty';
import { Title } from '../../ui/title';

type MemberProps = {
  members: {
    users: {
      user: User;
    }[];
    count: number;
  };
};

export const Members = ({ members: { users, count } }: MemberProps) => {
  return (
    <div className="group-members">
      <Title label={`Members (${count})`} />
      {users.length === 0 ? (
        <Empty
          icon={Users}
          title="No members"
          description="This group has no members."
        />
      ) : (
        <MembersGrid users={users} />
      )}
    </div>
  );
};
