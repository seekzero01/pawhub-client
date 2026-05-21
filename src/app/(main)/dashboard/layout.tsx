// app/dashboard/layout.tsx
import { Suspense } from 'react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            {children}
        </Suspense>
    )
}