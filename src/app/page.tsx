import { getApiStatus } from "@/lib/api-status";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const status = await getApiStatus();

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-3xl font-semibold">Ilmora</h1>
      <p className="text-gray-600">School &amp; Academy Management</p>
      <p role="status" className="rounded border px-4 py-2 text-sm">
        System status: {status === "up" ? "Online" : "Unavailable"}
      </p>
    </main>
  );
}