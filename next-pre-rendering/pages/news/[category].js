import React from 'react';

export default function Category({ articles, category }) {
  return (
    <>
      <h1>Showing News for Category: {category}</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id}. {article.title}
          </h2>
          <p>{article.desc}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const {
    params: { category },
    req,
    res,
  } = context;

  const response = await fetch(
    `http://localhost:8000/news?category=${category}`
  );
  const articles = await response.json();

  console.log(`Pre-rendering Articles for category: ${category}`);

  return {
    props: {
      articles,
      category,
    },
  };
}
