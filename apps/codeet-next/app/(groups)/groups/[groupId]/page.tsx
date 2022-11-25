import Image from 'next/image';
import { Globe, Facebook, Twitter, Calendar, MapPin  } from 'lucide-react';

// Components
const Title = ({ label }: { label: string }) => {
  return (
    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2">
      {label}
    </h2>
  )
};

const SocialMedia = () => {
  return (
    <div className="group-about__socials">
      <Title label="Socials" />
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex items-center">
          <Globe width={24} height={24} className="stroke-primary mr-2" />
          <span>https://www.codeet.com.br</span>
        </div>
        <div className="flex items-center">
          <Facebook width={24} height={24} className="stroke-primary mr-2" />
          <span>https://www.facebook.com/codeet</span>
        </div>
        <div className="flex items-center">
          <Twitter width={24} height={24} className="stroke-primary mr-2" />
          <span>https://www.twitter.com.br</span>
        </div>
      </div>
    </div>
  );
};

const GroupDescription = () => {
  return (
    <div className="group-about__description">
      <Title label="About" />
      <p>A maior conferência do ecossistema React da América Latina. Como nas conferências dos Estados Unidos e Europa, reunimos desenvolvedores, empresas e estudantes de tecnologia para compartilhar experiências no desenvolvimento de aplicações reativas.</p>
    </div>
  );
};

const UpcommingEvents = () => {
  return (
    <div className="group-about__description">
      <Title label="Upcoming Events" />

      <div className="gap-3 grid grid-cols-1 sm:grid-cols-fill-400">
        <div className="bg-white flex flex-col gap-5 md:gap-0 md:flex-row p-4 rounded-md">
          <div className="flex-none bg-slate-400 md:w-[160px] md:h[160px] md:mr-3 rounded-md">
            <img
              src="https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F508624315%2F676x380.webp&w=3840&q=75"
              alt="Event Image"
              className="object-cover w-full h-full rounded-md"
              width="100%"
              height="100%"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-primary text-2xl font-bold mb-3">Conference 1</h2>

            <div className="flex items-center">
              <Calendar width={16} height={16} className="flex-none stroke-primary mr-1" />
              <p className="ml-2 text-sm whitespace-pre-wrap leading-none text-slate-500">
                Saturday, December 3, 2022 at 8:00 AM
              </p>
            </div>

            <div className="flex items-center">
              <MapPin width={16} height={16} className="flex-none stroke-primary mr-1" />
              <p className="ml-2 text-sm whitespace-pre-wrap leading-none text-slate-500">
                Bourbon Shopping Săo Paulo - Rua Palestra Itália, 500 - Loja 263, 3° Piso - Perdizes, 05005-900
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

const Members = () => {
  return (
    <div className="grou-about__members">
      <Title label="Members (30)" />

      <div className="grid grid-flow-col gap-6">
        <div>
          <div className="w-36 h-44 bg-white rounded-md p-4 flex flex-col items-center justify-center gap-4">
            <div>
              <img
                className="rounded-full"
                width={72}
                height={72}
                alt="User Member Avatar"
                src="https://lh3.googleusercontent.com/a/ALm5wu2l5WjBglYs3c-v71tE17Xf9OXFjoSCO-08lWt3Vg=s96-c"
              />
            </div>
            <span className="text-sm font-bold">Thiago Zulato</span>
          </div>
        </div>
      </div>

    </div>
  )
};

export default function GroupAbout() {
  return (
    <div className="group-about flex flex-col gap-10">
      <GroupDescription />
      <SocialMedia />
      <UpcommingEvents />
      <Members />
    </div>
  )
};
