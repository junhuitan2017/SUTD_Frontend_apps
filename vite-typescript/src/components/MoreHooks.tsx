import { ChangeEvent, useMemo, useRef } from "react";

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

const someNumber = 25;

const MoreHooks = () => {
    const fibResult = useMemo<number>(() => fib(someNumber), [someNumber]);
    const inputRef = useRef<HTMLInputElement>(null);
    // This will not be called when input is changing as the component is not re-rendering
    console.log(`Outside ref value: ${inputRef?.current?.value}`);
    
    const handleInputChange = (e: ChangeEvent) => {
        console.log(`Inside ref value: ${inputRef?.current?.value}`);
    }
    
    return <>
        <h3>{fibResult}</h3>
        <input type="text" ref={inputRef} onChange={handleInputChange}/>
    </>;
};

export default MoreHooks;