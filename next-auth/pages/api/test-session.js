import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });

  // if not authenticated
  if (!session) res.status(401).json({ error: 'unauthenticated user!' });

  // if authenticated
  res.status(200).json({ message: 'Authentication Success', session });
}
