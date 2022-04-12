import Link from 'next/link';
import classes from '../../styles/Post.module.css';

export default function ProductList({ products }) {
  return (
    <>
      <h1>List of Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`} passHref>
            <h2 className={classes.title}>
              {product.id}. {product.title} : {product.price}
            </h2>
          </Link>
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  console.log(`Generating / Regenerating Product List`);
  const res = await fetch(`http://localhost:8000/products`);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
}
