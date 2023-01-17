import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import CounterWithCallback from "./components/CounterWithCallback";
import { useState } from "react";
import List from "./components/List";
import MoreHooks from "./components/MoreHooks";
import CounterUseReducer from "./components/CounterUseReducer";
import { CounterProvider, initState } from "./components/CounterContext";
import CounterWithContext from "./components/CounterWithContext";

function App() {
    const [count, setCount] = useState(100);
    const increment = (): void => {
        setCount((prev: number): number => prev + 1);
    };
    const decrement = (): void => {
        setCount((prev: number): number => prev - 1);
    };

    return (
        <>
            <Section>
                Hope you have a great year ahead.
            </Section>
            <Counter />
            <CounterWithCallback increment={increment} decrement={decrement}>
                Alternate count value is {count}
                <MoreHooks />
            </CounterWithCallback>
            <List
                items={["Bird", "Cat", "Dog", "🐻"]}
                render={(item: string) => <span className="gold">{item}</span>}
            />
            <CounterUseReducer>
                {(num: number) => <>Current count with useReducer: {num}</>}
            </CounterUseReducer>
            <CounterProvider count={initState.count} message={initState.message}>
                <Heading title="Happy New Year!" />
                <CounterWithContext>
                    {(num: number) => <>Current count with useReducer: {num}</>}
                </CounterWithContext>
            </CounterProvider>
        </>
    );
}

export default App;