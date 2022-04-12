import NextAuth from 'next-auth/next';
import GitHubProvider from 'next-auth/providers/github';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb.js';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: 'secret',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        //! 1. add "id" property to token object
        //! 2. token.id = user id from database
        token.id = user.id;
      }

      return token;
    },
    // current session and jwt callback
    async session({ session, token }) {
      //! 1. add "id" property to current session login user object
      //! 2. session.user.id = user id from database (from jwt function logic above)
      session.user.id = token.id;
      return session;
    },
  },
});
