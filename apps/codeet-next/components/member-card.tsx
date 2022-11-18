type MemberCardProps = {
  id: string;
  name: string;
};

export default function MemberCard({ id, name }: MemberCardProps) {
  return (
    <div
      key={id}
      className="flex flex-col gap-4 items-center justify-center w-full h-40 bg-white rounded-md p-5 border border-slate-300"
    >
      <div className="flex justify-center items-center w-12 h-12 bg-slate-300 text-slate-600 rounded-md font-bold text-2xl">
        {name.charAt(0)}
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg font-bold leading-none">{name}</p>
      </div>
    </div>
  );
}
