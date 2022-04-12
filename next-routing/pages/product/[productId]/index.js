import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ProductDetail() {
  const {
    query: { productId },
  } = useRouter();

  return (
    <>
      <h1>Details about product : {productId}</h1>
      <Link href="/product">
        <a>Back to Products Page</a>
      </Link>
    </>
  );
}
