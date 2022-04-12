import { useRouter } from 'next/router';

export default function Doc() {
  const {
    query: { params = [] },
  } = useRouter();
  const router = useRouter();

  console.log('router => ', router);

  console.log('params => ', params);

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  }

  return <h1>Docs Home Page</h1>;
}
