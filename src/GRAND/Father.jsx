import { useContext } from "react";
import Children from "./Children";
import { cardTotalContext } from "./Grand";

const Father = () => {
    const [counts,setCounts]=useContext(cardTotalContext)
    return (
        <div className="border-2 p-2">
            <h3 className="text-xl text-bold">Father:{counts}</h3>
            <button onClick={()=>setCounts(counts+1)}>add to card</button>
            <Children></Children>
        </div>
    );
};

export default Father;