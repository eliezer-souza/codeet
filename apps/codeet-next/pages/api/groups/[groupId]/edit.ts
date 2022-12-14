import { GroupCommands } from '@codeet/domain';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PATCH') {
    try {
      const body = JSON.parse(req.body);

      const { success, errors } = await GroupCommands.editGroup({
        id: String(req.query['groupId']),
        name: body.name,
        description: body.description,
        details: body.details,
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
