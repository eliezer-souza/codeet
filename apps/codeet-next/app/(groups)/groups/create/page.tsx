import GroupForm from '../../../../components/group-form';

export default async function CreateGroups() {
  return (
    <section className="container flex items-center justify-center gap-6 p-8 md:py-12 lg:pt-24">
      <div className="flex flex-col items-start gap-6 md:max-w-[960px] w-full">
        <h1 className="text-xl font-bold leading-[1.1] sm:text-2xl md:text-4xl">
          Create group
        </h1>
        <GroupForm isEdit={false} />
      </div>
    </section>
  );
}
