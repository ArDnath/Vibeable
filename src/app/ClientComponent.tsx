'use client';

import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';

export default function ClientComponent() {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.hello.queryOptions({ text: "John" }));

  return (
    <div>
      {data && JSON.stringify(data)}
    </div>
  );
}
