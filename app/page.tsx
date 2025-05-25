
export default async function Home() {
  const fetchPublicEnv = await fetch("http://localhost:3000/api/env", {cache: "no-store"});
  const response = await fetchPublicEnv.json();

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <h1 className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        {response.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_URL}
      </h1>
    </div>
  );
}
