import { Card , CardContent} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {SquarePen} from "lucide-react";
import dayjs from "dayjs";

interface PetOverviewProps {
    pets: any[]
}

const getAge = (dateOfBirth: string) => {
    const today = dayjs()
    return today.diff(dateOfBirth, "year")
}

export const PetOverview = ({ pets }: PetOverviewProps) => {
    return (
        <div className="max-w-130 flex flex-col gap-4 mt-4">
            {pets.map((pet: any) => (
                <Card key={pet.id} size="sm" className="bg-white">
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar className="size-14">
                                    <AvatarImage
                                        src="https://placedog.net/100/100?id=2"
                                        alt={`${pet.name}'s avatar`}
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h2 className="text-heading leading-heading tracking-heading mb-0.5 font-medium">{pet.name}</h2>
                                    <p className="text-caption leading-caption text-deep-plum">{pet.breed} • {getAge(pet.dateOfBirth)} years old • {pet.weight ?? 10} kg</p>
                                </div>
                            </div>
                            <Button variant="ghost" className="text-caption bg-amethyst-accent hover:bg-amethyst-accent/90">
                                <SquarePen /> Edit
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}