import { useTransition } from "react";
import { useState } from "react";

const UseTransitionExample = () => {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([]);

    // * isPending can be used to display loading animation
    // ! useTransition does not work with input values
    // !    - Input change is expected to be synchronous (setState before the UI rerenders)
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        setCount(count + 1); // Urgent update

        // This will be updated later without blocking the UI
        // ! Will still lag if the next transition starts before the prev one ends
        // ! Just delay the computing, does not quicken it
        startTransition(() => {
            const myArr = Array(20000)
                .fill(1)
                .map((el, i) => count + 20000 - i);
            setItems(myArr);
        });
    }

    const content = (
        <div className="App">
            <button onClick={handleClick}>{count}</button>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );

    return content;
};
export default UseTransitionExample;
