export async function apiFetch<T = unknown>(
    path: string,
    getToken: () => Promise<string | null>,
    options: RequestInit = {},
): Promise<T> {
    const token = await getToken()

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
        ...options,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            ...options.headers,
        },
        cache: 'no-store',
    })

    if (!res.ok) {
        const error = await res.text()
        throw new Error(`API error ${res.status}: ${error}`)
    }

    return res.json()
}