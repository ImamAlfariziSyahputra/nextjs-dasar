import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Events({ eventsData }) {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [events, setEvents] = useState(eventsData);

  const resetFilterEvents = async () => {
    setisLoading(true);
    const res = await fetch(`http://localhost:8000/events`);
    const data = await res.json();

    setEvents(data);
    setisLoading(false);
    router.push(`/events`, undefined, { shallow: true });
  };
  const filterEvents = async (category) => {
    setisLoading(true);
    const res = await fetch(
      `http://localhost:8000/events?category=${category}`
    );
    const data = await res.json();

    setEvents(data);
    setisLoading(false);
    router.push(`/events?category=${category}`, undefined, { shallow: true });
  };

  // console.log('events => ', events);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '1rem',
          columnGap: '1rem',
        }}
      >
        <button onClick={resetFilterEvents}>Reset</button>
        <button onClick={() => filterEvents('sports')}>Sports</button>
        <button onClick={() => filterEvents('tech')}>Tech</button>
        <button onClick={() => filterEvents('health')}>Health</button>
      </div>
      <h1 align="center">List of Events</h1>
      {isLoading && <h1 align="center">Loading...</h1>};
      {!isLoading &&
        events.map((event) => (
          <div
            key={event.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h2>
              {event.id}. {event.title} - {event.date} | {event.category}
            </h2>
            <p>{event.desc}</p>
          </div>
        ))}
      {events.length === 0 && <h1 align="center">No Events</h1>}
    </>
  );
}

export async function getServerSideProps(context) {
  const {
    query: { category },
  } = context;
  const queryString = category ? `category=${category}` : '';

  const response = await fetch(`http://localhost:8000/events?${queryString}`);
  const eventsData = await response.json();

  console.log('Server Side Props Running....');

  // console.log('category => ', category);
  // console.log('queryString => ', queryString);

  return {
    props: {
      eventsData,
    },
  };
}
