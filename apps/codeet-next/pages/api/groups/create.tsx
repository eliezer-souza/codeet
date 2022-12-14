import { GroupCommands } from '@codeet/domain';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const body = JSON.parse(req.body);

      const session = await getSession({ req });
      const user = session?.user;

      const { success, data, errors } = await GroupCommands.createGroup({
        name: body.name,
        description: body.description,
        details: body.details,
        administratorId: user['id'],
      });

      if (!success) {
        return res.status(400).json(errors);
      }

      return res.status(201).end(JSON.stringify(data));
    } catch (error) {
      console.error(error);
      return res.status(422).end();
    }
  }
}

export default handler;
