import { GroupCommands } from '@codeet/domain';
import Back from '../../../../components/ui/back';
import { Info, NavBar } from '../../../../components/group';

type GroupDetailLayoutProps = {
  params: { groupId: string };
  children: React.ReactNode;
};

export default async function GroupDetailLayout({
  children,
  params: { groupId },
}: GroupDetailLayoutProps) {
  const { data } = await GroupCommands.getGroupById({ id: groupId });

  return (
    <section className="container flex items-center justify-center gap-6 p-8 md:py-12 lg:pt-24">
      <div className="flex flex-col items-start gap-4 md:max-w-[960px] w-full">
        <Back />
        <Info
          group={data}
        />
        <div className="container">
          <div className="flex flex-col gap-6 sm:px-0">
            <NavBar groupId={groupId} />
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
