import { Suspense } from 'react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-full p-4">
            <Suspense fallback={<p>Loading...</p>}>
                {children}
            </Suspense>
        </div>
    )
}