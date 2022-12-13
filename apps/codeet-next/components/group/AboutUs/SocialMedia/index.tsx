import { Globe, Facebook, Twitter  } from 'lucide-react';

import { Title } from "../../../ui/title";

export const SocialMedia = () => {
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
