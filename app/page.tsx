'use client';

import { Button } from '@/components/ui/button';
import React from 'react';

export default function Home() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <main>
      <Button onClick={handleClick}>count : {count}</Button>
    </main>
  );
}
