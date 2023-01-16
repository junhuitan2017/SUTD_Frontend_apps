import './App.css';
import { useState, useEffect, useMemo, useCallback } from "react";
import Fibonacci from './components/Fibonacci';
import { UseReducerExample } from './components/UseReducerExample';
import UseDeferredValueExample from './components/UseDeferredValueExample';
import SearchBar from './components/SearchBar';
import FormInput from './components/FormInput';
import Video from './components/Video';

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
            <Video />
        </main>
    );
}

export default App;
