import { useContext, useState } from "react";
import Sister from "./Sister";
import { daymontContext } from "../Hooks/localContex";


const Children = () => {
    const daymond=useContext(daymontContext)

    return (
        <div className="border-2 p-2">
            <h3 className="text-xl text-bold">Children :{daymond}</h3>
            <button onClick={()=>useContext+1}>add to card</button>
            <Sister></Sister>
        </div>
    );
};

export default Children;