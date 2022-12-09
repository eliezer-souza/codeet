import { LucideProps } from 'lucide-react';
import { FC, ReactNode } from 'react';

type EmptyProps = {
  icon: FC<LucideProps>;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function Empty({
  icon: Icon,
  title,
  description,
  children,
}: EmptyProps) {
  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
          <Icon width={40} height={40} />
        </div>
        <h2 className="mt-6 text-xl font-semibold">{title}</h2>
        {description && (
          <p className="mt-3 mb-6 text-center text-sm font-normal leading-6 text-slate-700">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
