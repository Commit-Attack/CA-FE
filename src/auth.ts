import NextAuth, { type DefaultSession } from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      authorization: { params: { scope: 'read:user user:email repo' } },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (user && account) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_HOST}/users/login`,
          {
            method: 'POST',
            headers: {
              Accept: 'application/json, text/plain',
              'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
              githubId: account.providerAccountId,
              name: user.name,
              profileImageUrl: user.image,
            }),
          }
        );

        const { data } = await res.json();

        token.accessToken = data.accessToken;
      }

      return token;
    },
    session: ({ session, token }) => {
      session.user.accessToken = token.accessToken;

      return session;
    },
  },
  // debug: true,
});
