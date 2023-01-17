import { ReactNode } from "react";
import { useCounterMessageHook } from "../hooks/UseCounterMessageHook";
import { useCounterNumberHook } from "../hooks/UseCounterNumberHook";

type ChildrenType = {
    // children is a function that accepts one input which is a number, and returns a react node
    children: (num: number) => ReactNode;
};

const CounterWithContext = ({ children }: ChildrenType) => {
    // * Better to use custom hook to extract what is needed from the original hook
    const { count, increment, decrement } = useCounterNumberHook();
    console.log(
        "🚀 ~ file: CounterUseContext.tsx:12 ~ CounterUseContext ~ increment",
        increment
    );
    console.log(
        "🚀 ~ file: CounterUseContext.tsx:12 ~ CounterUseContext ~ count",
        count
    );
    const { message, handlePayload } = useCounterMessageHook();
    return (
        <>
            <h1>{children(count)}</h1>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
            <br />
            <input type="text" onChange={handlePayload} />
            <h3>{message}</h3>
        </>
    );
};

export default CounterWithContext;
