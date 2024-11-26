import { auth, signIn, signOut } from '@/auth';

export default async function GithubSignIn() {
  const users = await auth();

  return (
    <>
      <form
        action={async () => {
          'use server';
          await signIn('github', { redirectTo: '/' });
        }}
      >
        <button type="submit">Signin with GitHub</button>
      </form>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
      <div style={{ whiteSpace: 'pre-line', wordBreak: 'break-all' }}>
        userData: {JSON.stringify(users)}
      </div>
    </>
  );
}
