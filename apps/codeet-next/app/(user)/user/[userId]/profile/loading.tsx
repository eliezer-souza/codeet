import Skeleton from "../../../../../components/ui/skeleton";

export default function UserProfileLoading() {
  return (
    <section className="container flex items-center justify-center gap-6 p-8 md:py-12 lg:pt-24">
      <div className="flex flex-col items-start gap-6 md:max-w-[960px] w-full">
        <Skeleton className="w-full h-40" />
        <Skeleton className="w-full h-60" />
        <Skeleton className="w-full h-60" />
      </div>
    </section>
  );
}
