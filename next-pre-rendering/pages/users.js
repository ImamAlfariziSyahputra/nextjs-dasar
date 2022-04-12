import User from '../components/user';

export default function Users({ users }) {
  return (
    <>
      <h1 align="center">List of Users</h1>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
