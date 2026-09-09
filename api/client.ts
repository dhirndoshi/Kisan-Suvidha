export type ApiError = Error & { status?: number };

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '') || '';
const TIMEOUT = Number(process.env.NEXT_PUBLIC_API_TIMEOUT_MS || 10000);
const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_FALLBACK !== 'false';

export async function api<T>(path: string, init: RequestInit = {}): Promise<T> {
  if (!API_BASE) throw Object.assign(new Error('NEXT_PUBLIC_API_BASE_URL is not configured'), { status: 0 });
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), TIMEOUT);
  try {
    const response = await fetch(`${API_BASE}${path.startsWith('/') ? path : `/${path}`}`, {
      ...init,
      signal: init.signal || controller.signal,
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', ...(init.headers || {}) },
    });
    if (!response.ok) throw Object.assign(new Error(`API request failed: ${response.status}`), { status: response.status });
    return response.status === 204 ? (undefined as T) : await response.json() as T;
  } finally { window.clearTimeout(timer); }
}

export function shouldFallback(error: unknown) {
  return USE_MOCK && !!error;
}
