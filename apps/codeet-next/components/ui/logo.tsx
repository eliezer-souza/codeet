import Image from 'next/image';

type LogoProps = {
  width?: number;
  height?: number;
};

export const Logo = ({ width = 32, height = 32 }: LogoProps) => (
  <Image
    src="/codeet-logo.png"
    width={width}
    height={height}
    alt="Logo Codeet"
  />
);
