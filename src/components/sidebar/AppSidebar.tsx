"use client"

import {
    Sidebar,
    SidebarContent, SidebarHeader,
 SidebarFooter} from "@/components/ui/sidebar";
import {PetSwitcher} from "@/components/sidebar/components/PetSwitcher";
import {NavUser} from "@/components/sidebar/components/NavUser";
import {useSession} from "@/lib/auth-client";
import {NavMain} from "@/components/sidebar/components/NavMain";

export interface Pet {
    id: string;
    userId: string;
    name: string;
    species: 'dog' | 'cat' | 'bird' | 'other'; // Union type for stricter domain safety
    breed: string;
    sex: 'male' | 'female';
    dateOfBirth: Date;
    avatarUrl: string;
    microchipped: boolean;
    spayedNeutered: boolean;
    status: 'active' | 'inactive' | 'archived';
    createdAt: Date;
}

export const MOCK_PETS: Pet[] = [
    {
        id: 'seed-pet-001',
        userId: 'g0tEFrsxTepOSTyc2WgzurhnlK9Fhgrv',
        name: 'Mochi',
        species: 'dog',
        breed: 'Shiba Inu',
        sex: 'male',
        dateOfBirth: new Date('2020-03-15'),
        avatarUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=200&h=200",
        microchipped: true,
        spayedNeutered: true,
        status: 'active',
        createdAt: new Date('2026-06-01T19:49:13.826Z')
    },
    {
        id: 'seed-pet-002',
        userId: 'g0tEFrsxTepOSTyc2WgzurhnlK9Fhgrv',
        name: 'Luna',
        species: 'cat',
        breed: 'British Shorthair',
        sex: 'female',
        dateOfBirth: new Date('2021-07-22'),
        avatarUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=200&h=200",
        microchipped: true,
        spayedNeutered: true,
        status: 'active',
        createdAt: new Date('2026-06-01T19:49:14.553Z')
    }
] as const;

export const AppSidebar = () => {
    const { data: session, isPending } = useSession();

    return (
        <Sidebar side="left" variant="sidebar" collapsible="icon">
            <SidebarHeader>
                <PetSwitcher pets={MOCK_PETS}/>
            </SidebarHeader>

            <SidebarContent>
                <NavMain />
            </SidebarContent>

            <SidebarFooter>
                {isPending ? <div>Loading...</div> : <NavUser user={session?.user} />}
            </SidebarFooter>
        </Sidebar>
    )
};