import Link from 'next/link';
import classes from '../../styles/Post.module.css';

export default function PostList({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <h2 className={classes.title}>
              {post.id}. {post.title}
            </h2>
          </Link>
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
