import Back from "../../../../components/ui/back";
import Skeleton from "../../../../components/ui/skeleton";

export default function EventInformationLoading() {
  return (
    <section className="container flex items-center justify-center gap-6 p-8 md:py-12 lg:pt-24">
      <div className="flex flex-col items-start gap-10 md:max-w-[960px] w-full">
        <Back />
        <Skeleton className="h-40 w-full" />
        <div className="w-full flex flex-col-reverse md:flex-row gap-10 h-80">
          <Skeleton className="h-full w-full" />
          <Skeleton className="h-full w-full md:w-1/2" />
        </div>
      </div>
    </section>
  );
}
