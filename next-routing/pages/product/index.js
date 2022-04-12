import Link from 'next/link';

export default function ProductList() {
  return (
    <>
      <h2>
        <Link href="/product/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/product/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/product/3" replace>
          Product 3 (replace)
        </Link>
      </h2>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
}
