import { useState } from "react";

interface Pet {
    name: string;
    breed: string;
}

export function PetInfo() {
    const [ pet, setPet ] = useState<Pet>(
        { name: "Neo", breed: "Boston Terrier" }
    );

    return (
        <div className="petInfo">
            <p>{pet.name}</p>
            <p>{pet.breed}</p>
        </div>
    )
}