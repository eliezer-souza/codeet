import { EventCommands } from '@codeet/domain';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const body = JSON.parse(req.body);
      console.log(body);

      const { success, data, errors } = await EventCommands.createEvent({
        name: body.name,
        details: body.details,
        date: body.date,
        venue: body.venue,
        groupId: body.groupId,
      });

      if (!success) {
        return res.status(422).json(errors);
      }

      return res.status(201).end(JSON.stringify(data));
    } catch (error) {
      console.error(error);
      return res.status(422).end();
    }
  }
}

export default handler;
