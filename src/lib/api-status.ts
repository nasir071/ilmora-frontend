// Reads the backend health endpoint. The API address comes from the server environment only.
const apiUrl = process.env.API_URL ?? "http://localhost:4000";

export type ApiStatus = "up" | "down";

export async function getApiStatus(): Promise<ApiStatus> {
  try {
    const response = await fetch(`${apiUrl}/api/v1/health`, { cache: "no-store" });
    return response.ok ? "up" : "down";
  } catch {
    return "down";
  }
}