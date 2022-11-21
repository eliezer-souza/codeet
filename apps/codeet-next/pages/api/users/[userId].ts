import { UserCommands } from '@codeet/domain';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import { withCurrentUser } from '../../../lib/middlewares/with-current-user';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PATCH') {
    try {
      const session = await getSession({ req });
      const user = session?.user;

      const body = JSON.parse(req.body);

      const { success, errors } = await UserCommands.editUser({
        id: user['id'],
        name: body.name,
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

export default withCurrentUser(handler);
