import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const res = await fetch(`http://localhost:8000/dashboard`);
      const data = await res.json();

      setDashboardData(data);
      setIsLoading(false);
    }

    fetchDashboardData();
  }, []);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {dashboardData && (
        <div>
          <h2>Dashboard</h2>
          <h2>Posts - {dashboardData.posts}</h2>
          <h2>Likes - {dashboardData.likes}</h2>
          <h2>Followers - {dashboardData.followers}</h2>
          <h2>Following - {dashboardData.following}</h2>
        </div>
      )}
    </>
  );
}
