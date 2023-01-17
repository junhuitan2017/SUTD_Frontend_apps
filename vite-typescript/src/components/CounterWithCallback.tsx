import { ReactNode } from "react";

type CounterWithCallbackProps = {
    increment: () => void;
    decrement: () => void;
    children: ReactNode;
}

const CounterWithCallback = ({ increment, decrement, children }: CounterWithCallbackProps) => {
    return (
        <>
            <h1>{children}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
};

export default CounterWithCallback;