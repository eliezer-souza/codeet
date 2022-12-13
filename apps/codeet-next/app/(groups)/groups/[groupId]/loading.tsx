import Skeleton from '../../../../components/ui/skeleton';

export default function Loading() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Skeleton className="w-full h-20" />
      <Skeleton className="w-full h-80" />
    </div>
  );
}
