export async function apiFetch<T = unknown>(
    path: string,
    getToken: () => Promise<string | null>,
    options: RequestInit = {},
): Promise<T> {
    const token = await getToken()

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...options.headers,
        },
    })

    if (!res.ok) {
        const error = await res.text()
        throw new Error(`API error ${res.status}: ${error}`)
    }

    return res.json()
}