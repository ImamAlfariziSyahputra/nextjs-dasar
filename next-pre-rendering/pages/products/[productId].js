import { useRouter } from 'next/router';

export default function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <h2>
        {product.id}. {product.title}
      </h2>
      <p>{product.description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(`Regenerating product ${params.productId}`);
  const res = await fetch(`http://localhost:8000/products/${params.productId}`);
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: '1' },
      },
    ],
    fallback: true,
  };
}
