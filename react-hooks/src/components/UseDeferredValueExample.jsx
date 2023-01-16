import { useState, useTransition, useDeferredValue } from "react";

const UseDeferredValueExample = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // * These will use the previous value while the array is computing
  const deferredCount = useDeferredValue(count);
  const deferredItems = useDeferredValue(items);

  const handleClick = () => {
    // urgent update
    setCount(count + 1);

    // no transition, laggy
    const myArr = Array(20000)
      .fill(1)
      .map((el, i) => count + 20000 - i);
    setItems(myArr);
  };

  const content = (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
      <p>Deferred: {deferredCount}</p>
      <ul>
        {deferredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return content;
};
export default UseDeferredValueExample;
