import { useDeferredValue, useState, useTransition, useEffect } from "react";

// Counting 1 - 20K in an array
const bigArray = [...Array(30000).keys()];

const SearchBar = () => {
    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState(bigArray);
    const [isPending, startTransition] = useTransition();
    const deferredInput = useDeferredValue(inputValue);

    const handleInput = e => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        // Search the bigArray only when deferredInput changes
        // Update the UI first before massive filtering is done
        startTransition(() => {
            console.log(`deferredInput: ${deferredInput}`);
            const filtered = bigArray.filter(item => item.toString().includes(deferredInput));
            setList(filtered);
        })
    }, [deferredInput]);

    const content = (
        // Make it more transparent when isPending is true
        <section style={isPending ? { opacity: 0.3 } : null}>
            <p>Searching for: {deferredInput || "All"}</p>
            {isPending ? <p>Loading...</p> : null}
            <ul>
                {list.map(item => 
                    <li key={item}>{item}</li>
                )}
            </ul>
        </section>
    )

    return (
        <div className="App">
            <input type="text" value={inputValue} onChange={handleInput} />
            {content}
        </div>
    );
}

export default SearchBar;