import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { apiFetch } from '@/src/lib/api'

interface Pet {
    id: number
    name: string
    species: string
    breed: string | null
}

export default async function PetsPage() {
    const { isAuthenticated, getToken } = await auth()

    if (!isAuthenticated) {
        redirect('/sign-in')
    }

    const pets = await apiFetch<Pet[]>('/pets', getToken)

    return (
        <div>
            <h1>My Pets</h1>
            {pets.length === 0 && <p>No pets found.</p>}
            {pets.map((pet) => (
                <div key={pet.id}>
                    <strong>{pet.name}</strong> — {pet.species}
                    {pet.breed && <span> ({pet.breed})</span>}
                </div>
            ))}
        </div>
    )
}