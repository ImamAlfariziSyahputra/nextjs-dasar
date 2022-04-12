import Link from 'next/link';
export default function Home() {
  return (
    <>
      <h1>Next JS Pre Rendering</h1>
      <Link href="/users">
        <a>Users Page</a>
      </Link>
      <br />
      <Link href="/posts">
        <a>Posts Page</a>
      </Link>
      <br />
      <Link href="/news">
        <a>News Page</a>
      </Link>
    </>
  );
}
