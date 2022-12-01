import React, { FC, ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';
import ReactQueryWrapper from '../../components/react-query-wrapper';
import SessionWrapper from '../../components/session-wrapper';
import { faker } from '@faker-js/faker';
import { axe } from 'jest-axe';
import Toaster from '../../components/ui/toaster';

const user = {
  id: faker.datatype.uuid(),
  name: faker.name.fullName(),
  email: faker.internet.email(),
  image: faker.image.imageUrl(),
};

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReactQueryWrapper>
      <SessionWrapper session={{ expires: '', user }}>
        {children}
        <Toaster reverseOrder={false} />
      </SessionWrapper>
    </ReactQueryWrapper>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render, axe };
