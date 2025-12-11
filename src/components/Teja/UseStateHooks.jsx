import { useState } from "react";
function UseStates() {
    const [mul, setMul]= useState(1);
    return(
        <div>
            <h1>mul: {mul}</h1>
            <button onClick={() => setMul(mul*2)}>
                Multiple
            </button>
        </div>
    );
}//react
export default UseStates;