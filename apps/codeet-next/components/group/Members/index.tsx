import { User } from "@codeet/domain";

import { Title } from "../../ui/title";
import { MembersGrid } from "./MembersGrid";

type MemberProps = {
  members: {
    users: {
        user: User;
    }[];
    count: number;
  }
}

export const Members = ({ members: { users, count } }: MemberProps) => {
  return (
    <div className="group-members">
      <Title label={`Members (${count})`} />
      <MembersGrid users={users} />
    </div>
  )
};
