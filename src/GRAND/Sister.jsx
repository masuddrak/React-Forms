import { useContext } from "react";
import { cardTotalContext } from "./Grand";

const Sister = () => {
    const [counts,setCounts]=useContext(cardTotalContext)
    return (
        <div className="border-2 p-2">
        <h3 className="text-xl text-bold">Sister {counts}</h3>
        <button onClick={()=>setCounts(counts+1)}>add to card</button>
    </div>
    );
};

export default Sister;