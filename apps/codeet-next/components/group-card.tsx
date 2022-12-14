import Link from 'next/link';
import Skeleton from './ui/skeleton';

type GroupCardProps = {
  id: string;
  name: string;
  urlPhoto?: string;
};

export default function GroupCard({ id, name }: GroupCardProps) {
  return (
    <Link
      href={`groups/${id}`}
      className="flex flex-col w-full h-96 rounded-md cursor-pointer border border-slate-300"
    >
      <div
        className={`flex justify-center items-center h-full w-full bg-slate-300 font-bold text-slate-600 text-3xl rounded-md rounded-bl-none rounded-br-none`}
      >
        {name.charAt(0).toUpperCase()}
      </div>
      <div className="flex justify-center items-center bg-white w-full h-16 rounded-md rounded-tl-none rounded-tr-none">
        {name}
      </div>
    </Link>
  );
}

GroupCard.Skeleton = function GroupCardSkeleton() {
  return <Skeleton className="w-full h-96" />;
};
