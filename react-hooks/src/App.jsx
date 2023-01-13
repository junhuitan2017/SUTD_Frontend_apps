import './App.css';
import { useState, useEffect, useMemo, useCallback } from "react";
import Fibonacci from './components/Fibonacci';
import { UseReducerExample } from './components/UseReducerExample';

const getArray = () => {
    for (let i = 0; i < 1000000000; i++) {
        //do something expensive
    }
    return ["Dave", "Gray"];
};

function App() {
    const [userNumber, setUserNumber] = useState("");
    const [randomInput, setRandomInput] = useState("");

    return (
        <main className='App'>
            <Fibonacci userNumber={userNumber} setUserNumber={setUserNumber} />

            <label>Random Input:</label>
            <input
                type="text"
                value={randomInput}
                placeholder="Random Input"
                onChange={(e) => setRandomInput(e.target.value)}
            />
            <p>{randomInput}</p>
            <UseReducerExample />
        </main>
    );
}

export default App;
