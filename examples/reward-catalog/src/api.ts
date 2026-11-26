export async function request(path: string, init?: RequestInit): Promise<Response> {
  const response = await fetch(path, init);

  if (!response.ok) {
    throw new Error(`Request failed with HTTP ${response.status}`);
  }

  return response;
}

export async function readJson<T>(path: string, init?: RequestInit): Promise<T> {
  return (await request(path, init)).json() as Promise<T>;
}
