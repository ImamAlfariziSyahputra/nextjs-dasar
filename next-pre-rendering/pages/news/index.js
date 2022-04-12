export default function News({ articles }) {
  return (
    <>
      <h1 align="center">List of News Articles</h1>
      {articles.map((article) => (
        <div
          key={article.id}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <h2>
            {article.id}. {article.title} | {article.category}
          </h2>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8000/news`);
  const articles = await res.json();

  console.log(`Pre-rendering New Articles List`);

  return {
    props: {
      articles,
    },
  };
}
