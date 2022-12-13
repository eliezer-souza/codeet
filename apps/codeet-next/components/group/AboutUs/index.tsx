import { Event, Group, User } from '@codeet/domain';
import { Members } from '../Members';
import { GroupDescription } from './GroupDescription';
import { Events } from '../Events';

type AboutUsProps = {
  group: Group;
  members: {
    users: {
        user: User;
    }[];
    count: number;
  };
  events: {
    data: Event[];
    count: number;
  }
};

export default function AboutUs({ events, members, group }: AboutUsProps) {
  return (
    <>
      <GroupDescription description={group.details} />
      <Events events={events} />
      <Members members={members} />
    </>
  )
};
