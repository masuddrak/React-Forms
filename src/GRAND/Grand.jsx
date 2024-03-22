import { createContext, useContext, useState } from "react";
import Father from "./Father";
import { daymontContext } from "../Hooks/localContex";

export const cardTotalContext = createContext(0)

const Grand = () => {
    const oldDymont = useContext(daymontContext)
    const count=useContext(cardTotalContext)
    const [counts, setCounts] = useState(count)

    return (
        <div className="border-2 p-3">
            <h1 className="text-3xl font-bold">Grand :{oldDymont}</h1>
            <h3>counts :{counts}</h3>
            <cardTotalContext.Provider value={[counts,setCounts]}>
                <daymontContext.Provider value={oldDymont}>
                    <Father ></Father>
                </daymontContext.Provider>
            </cardTotalContext.Provider>
        </div>
    );
};

export default Grand;