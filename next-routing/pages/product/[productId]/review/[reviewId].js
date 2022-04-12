import { useRouter } from 'next/router';

export default function ReviewDetail() {
  const {
    query: { productId, reviewId },
  } = useRouter();
  const router = useRouter();

  console.log('router => ', router);

  return (
    <h1>
      Product ID {productId}, Review Number : {reviewId}{' '}
    </h1>
  );
}
