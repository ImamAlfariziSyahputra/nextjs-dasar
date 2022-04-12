import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <br />
      <Link href="/product">
        <a>Products</a>
      </Link>
      <br />
      <button onClick={() => router.push('/product')}>Place Order</button>
    </>
  );
}
