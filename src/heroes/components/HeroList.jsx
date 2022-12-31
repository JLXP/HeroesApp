import { useMemo } from "react";
import { getHeroresByPublisher } from "../helpers";
import { HeroCard } from "./";

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroresByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-2 row-cols-md-3 g-3">
            {heroes.map((hero) => (
                <HeroCard key={hero.id}
                    {...hero}
                />
            ))}
        </div>
    )
}
