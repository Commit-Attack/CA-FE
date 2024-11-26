import { auth, signIn, signOut } from '@/auth';
import Count from '@/components/Count/Count';
import GetUserButton from '@/components/GetUserButton';
import { Button } from '@/components/ui/button';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

export default async function Home() {
  const session = await auth();

  return (
    <SessionProvider>
      <main>
        <form
          action={async () => {
            'use server';
            await signIn('github');
          }}
        >
          <Button type="submit">로그인</Button>
        </form>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <Button type="submit">로그아웃</Button>
        </form>
        {session?.user && (
          <>
            <div>
              <h2>유저 정보</h2>
              <div>{JSON.stringify(session.user)}</div>
            </div>
            <GetUserButton />
          </>
        )}
        <Count />
      </main>
    </SessionProvider>
  );
}
