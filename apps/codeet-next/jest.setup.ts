// Polyfill "window.fetch" used in the React component.
import 'whatwg-fetch';

// Extend Jest "expect" functionality with Testing Library assertions.
import '@testing-library/jest-dom/extend-expect';

// Extend jest-axe
import { toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

import { server } from './__mocks__/server';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});