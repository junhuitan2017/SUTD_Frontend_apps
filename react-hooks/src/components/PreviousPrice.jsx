import React, { useState, useEffect, useRef } from "react";

const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 90, 90, 100];

export default function PreviousPrice() {
  const [price, setPrice] = useState(10);
  const [index, setIndex] = useState(0);
  const priceRef = useRef(0);

  const onPriceChange = (e) => {
    setPrice(Number(e.target.value));
    setIndex(e.target.options.selectedIndex);
  };

  const priceOptions = prices.map((price, index) => (
    <option key={index} value={price}>
      {price}$
    </option>
  ));

  console.log("index", index);
  console.log("priceref ", priceRef.current);
  console.log("price ", price);

  useEffect(() => {
    // ? This is set after the setState, so the UI is not re-rendered
    priceRef.current = price;
    console.log(
      "🚀 ~ file: PreviousPrice.jsx:27 ~ useEffect ~ priceRef.current",
      price
    );
  }, [index]);

  const icon =
    priceRef.current < price ? "😡" : priceRef.current > price ? "😀" : " 🥸 ";

  console.log("icon", icon);

  return (
    <div>
      <select value={price} onChange={onPriceChange}>
        {priceOptions}
      </select>
      <div>
        <p> Current price: {price}</p>
        <p>
          Previous price: {priceRef.current} {icon}
        </p>
      </div>
    </div>
  );
}
