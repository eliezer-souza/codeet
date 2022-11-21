export * as UserCommands from './modules/user/commands/user.command';
export * as GroupCommands from './modules/group/commands/group.command';
export * as EventCommands from './modules/event/commands/event.command';

export * from './shared/prisma-client';

export type { User, Group, Event, Member, Participant } from '@prisma/client';
