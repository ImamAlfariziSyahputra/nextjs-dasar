import React from 'react';
import { comments } from '../../data/comments';

export default function Comment({ comment }) {
  return (
    <div>
      {comment.id}. {comment.text}
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: '1' } },
      { params: { commentId: '2' } },
      { params: { commentId: '3' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { commentId },
  } = context;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  console.log('comment => ', comment);

  //! Dont do fetch() my own api? at getStaticProps and getServerSideProps
  //? dont do this for pre-rendering content? bcs induces a delay?
  // const res = await fetch(`http://localhost:3000/comments/${commentId}`);
  // const comment = await res.json();

  return {
    props: {
      comment,
    },
  };
}
