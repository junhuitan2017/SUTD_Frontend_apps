import { memo } from "react";
import { useCallback } from "react";

// * Can just memoize the whole component instead of just the value
const Fibonacci = memo(function ({ userNumber, setUserNumber }) {

    // Expensive Function
    // ! useCallback does NOT memoize the result of fib
    // !    - It only memoise the function
    // This is a pure function
    //// const fib = useCallback((n) => {
    ////     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    //// }, []);
    // * Does not get recreted every render, it's the same function throughout
    // If wont change at all, can put it outside without useCallback
    const fib = useCallback((n) => {
        // This function does not enclose a state
        return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }, []); // useCallback with an empty dependency array is a memoized function, which does not compute updated states (if you have states inside it, it'll use the initial value passed in useState.

    // log when it's rendered
    console.log("Component rendered at ", Date.now());

    // ! This still gets recomputed everytime this App is rerendered
    // ? Can use this here cause the whole component is memoized
    const fibNumber = fib(userNumber);
    // * Use useMemo to store the value
    // const fibNumber = useMemo(() => fib(userNumber), [userNumber, fib]);

  return (
    <>
      <label>Fibonacci Sequence:</label>
      <input
        type="number"
        value={userNumber}
        placeholder="Position"
        onChange={(e) => setUserNumber(e.target.value)}
      />
      <p>Number: {fibNumber || "--"}</p>
    </>
  );
});

export default Fibonacci;
