import prisma from '@/lib/db'
import ClientComponent from './ClientComponent';

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      {JSON.stringify(users, null, 2)}
      <ClientComponent />
    </div>
  );
}