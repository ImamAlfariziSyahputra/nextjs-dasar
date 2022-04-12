import React from 'react';

export default function News({ data }) {
  return <div>{data}</div>;
}

export async function getStaticProps(context) {
  console.log('Get Static Props Running...', context.previewData);
  return {
    props: {
      data: context.preview
        ? 'List of draft articles'
        : 'List of published articles',
    },
  };
}
