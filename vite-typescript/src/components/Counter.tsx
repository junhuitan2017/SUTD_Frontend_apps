import { KeyboardEvent, MouseEvent, useCallback, useState } from "react";

interface User {
    id: number;
    username: string;
}

const Counter = () => {
    // ? Typescript is able to infer void and primitive type so is optional to add them
    const [count, setCount] = useState<number>(1);

    // Defining state type with interface
    const [users, setUsers] = useState<User[] | null>(null);

    const increment = (): void => {
        setCount((prev: number): number => prev + 1);
    };
    const decrement = (): void => {
        setCount((prev: number): number => prev - 1);
    };

    const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
        setCount((prev: number): number => prev + 2);
    }, []);

    return (
        <>
            <h1>Count is {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
};

export default Counter;