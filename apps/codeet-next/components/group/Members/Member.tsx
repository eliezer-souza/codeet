import Image from 'next/image';
import Link from 'next/link';

type MemberProps = {
  userId: string;
  photo: string;
  name: string;
};

export const Member = ({ userId, name, photo }: MemberProps) => {
  return (
    <Link
      href={`/user/${userId}/profile`}
      className="w-full h-44 bg-white rounded-md p-4 flex flex-col items-center justify-center gap-4"
    >
      <Image
        className="rounded-full"
        width={72}
        height={72}
        alt="User Member Avatar"
        src={photo}
      />
      <span className="text-sm font-bold text-center">{name}</span>
    </Link>
  );
};
