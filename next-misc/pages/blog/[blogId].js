import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Blog({ title, description }) {
  const router = useRouter();

  console.log('router => ', router);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1>Single Blog Page</h1>
      {/* NEXT_PUBLIC_"NAME EXAMPLE" => For Public ENV Name (can render in ui) */}
      <h3>Env Analytics ID: {process.env.NEXT_PUBLIC_ANALYTICS_ID} </h3>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { blogId: '1' },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps() {
  // const user = process.env.DB_USER;
  // const password = process.env.DB_PASSWORD;

  // console.log('user => ', user);
  // console.log('password => ', password);

  return {
    props: {
      title: `Single Blog`,
      description: 'Article Description',
    },
  };
}
