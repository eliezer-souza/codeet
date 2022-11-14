type GroupCardProps = {
  id: string;
  name: string;
  urlPhoto?: string;
};

const colors = {
  0: 'yellow',
  1: 'pink',
  2: 'magenta',
  3: 'violet',
  4: 'blue',
};

export default function GroupCard({ id, name }: GroupCardProps) {
  const randomColorIndex = Math.floor(Math.random() * 5);

  return (
    <div
      role="button"
      className="flex flex-col w-full h-96 rounded-md cursor-pointer border border-slate-300"
      key={id}
    >
      <div
        className={`flex justify-center items-center h-full w-full bg-${colors[randomColorIndex]}-main font-bold text-${colors[randomColorIndex]}-dark text-3xl rounded-md rounded-bl-none rounded-br-none`}
      >
        {name.charAt(0).toUpperCase()}
      </div>
      <div className="flex justify-center items-center bg-white w-full h-16 rounded-md rounded-tl-none rounded-tr-none">
        {name}
      </div>
    </div>
  );
}
