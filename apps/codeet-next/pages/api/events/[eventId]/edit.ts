import { EventCommands } from '@codeet/domain';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PATCH') {
    try {
      const body = JSON.parse(req.body);

      const { success, errors } = await EventCommands.editUser({
        id: String(req.query['eventId']),
        name: body.name,
        details: body.details,
        date: new Date(body.date).toISOString(),
        venue: body.venue,
      });

      if (!success) {
        return res.status(400).json(errors);
      }

      return res.end();
    } catch (error) {
      console.error(error);
      return res.status(422).end();
    }
  }
}

export default handler;
