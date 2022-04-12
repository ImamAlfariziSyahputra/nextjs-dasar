import React from 'react';

export default function Login() {
  return <div>Login Page</div>;
}

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
