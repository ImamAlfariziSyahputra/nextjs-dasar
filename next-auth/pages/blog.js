import React from 'react';
import { getSession, useSession } from 'next-auth/react';

export default function Blog({ data }) {
  const { data: session } = useSession();
  // console.log({ session });

  return <h1>{data}</h1>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // protect route for unauthenticated users
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      //! session data will pre-render
      session,
      data: session ? 'List of 100 personalized blogs' : 'List of free blogs',
    },
  };
}
