import { rest } from 'msw';
import { EVENT_ID } from './fixtures/event';

export const handlers = [
  rest.post(
    `/api/events/${EVENT_ID}/attend-event`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),
];
