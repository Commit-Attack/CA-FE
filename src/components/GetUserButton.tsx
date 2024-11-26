'use client';

import { useSession } from 'next-auth/react';
import { Button } from './ui/button';

export default function GetUserButton() {
  const { data: session } = useSession();

  const handleGetUserClick = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/users/info`, {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });

    const { data } = await res.json();

    console.log('GET /auth/github/users: ', data);
  };

  return <Button onClick={handleGetUserClick}>유저 정보 가져오기</Button>;
}
