import { EventCommands } from '@codeet/domain';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const session = await getSession({ req });
      const user = session?.user;

      const { success, errors } = await EventCommands.attendEvent({
        userId: user['id'],
        eventId: String(req.query['eventId'])
      });

      if (!success) {
        return res.status(422).json(errors);
      }

      return res.end();
    } catch (error) {
      console.error(error);
      return res.status(422).end();
    }
  }
}

export default handler;
