import React from 'react';
import useSWR from 'swr';

const fetcher = async () => {
  const res = await fetch(`http://localhost:8000/dashboard`);
  const data = await res.json();

  return data;
};

export default function DashboardSWR() {
  const { data, error } = useSWR('dashboard', fetcher);
  console.log('data => ', data);
  console.log('error => ', error);
  return (
    <>
      {!data && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data && (
        <div>
          <h2>Dashboard</h2>
          <h2>Posts - {data.posts}</h2>
          <h2>Likes - {data.likes}</h2>
          <h2>Followers - {data.followers}</h2>
          <h2>Following - {data.following}</h2>
        </div>
      )}
    </>
  );
}
