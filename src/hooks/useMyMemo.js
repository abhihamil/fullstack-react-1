import { useEffect, useState } from "react";

function useMyMemo(computeFn,deps) {
    
    const [computedValue,setComputedValue]=useState(computeFn);
    useEffect(()=>{
        const result=computeFn();
        setComputedValue(result)
    },deps);
    return computedValue;
    
}

export default useMyMemo;