'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export default function Count() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>{process.env.NEXT_PUBLIC_ENV_TEST}</h1>
      <Button onClick={handleClick}>count : {count}</Button>
    </>
  );
}
