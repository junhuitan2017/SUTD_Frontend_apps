import './App.css';

import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import SearchBar from './components/SearchBar';
import ItemsDisplay from './components/ItemsDisplay';
import AddItem from './components/AddItem';

export interface Item {
    id?: string;
    name: string;
    price: number;
    type: string;
    brand: string;
}

interface Data {
    items: Item[];
}

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: midnightblue;
  font-weight: bolder;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding-top: 5em;
  background: ghostwhite;
`;

function App() {
    const [data, setData] = useState<Data>({ items: [] });
    const [filters, setFilters] = useState<Item | null>(null);

    useEffect(() => {
        fetch("http://localhost:9000/items")
            .then((response: Response) => response.json())
            .then((resData: Item[]) => {
                setData({ items: resData });
            })
        return () => {
            console.log("Unmount");
        };
    }, []);

    const updateFilters = (searchParams: Item) => {
        setFilters(searchParams);
    };

    // ! useCallback comes with a cost to check whether to rerender or not
    // -> If view alot but not update alot then is okay
    // -> If update alot then no point since it will already be changed everytime
    const deleteItem = useCallback((item: Item) => {
        const items = data["items"];
        const requestOptions = {
            method: "DELETE"
        };
        fetch(`http://localhost:9000/items/${item.id}`, requestOptions)
            .then((response: Response) => {
                if (response.ok) {
                    // Update current state
                    const idx = items.indexOf(item);
                    // Splice to data and delete
                    items.splice(idx, 1);
                    setData({ items });
                }
            })
    }, [data]);

    const addItemToData = (item: Item) => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        };
        fetch("http://localhost:9000/items", requestOptions)
            .then((response: Response) => response.json())
            .then(resData => {
                // Update local copy
                let itemsValue = data["items"];
                itemsValue.push(resData);
                setData({ items: itemsValue });
            })
    }

    const filterData = (data: Item[]) => {
        // check if at least one field is true 
        if (filters === null || (
            (filters.name === "" || filters.name === undefined) &&
            (filters.price === 0 || isNaN(filters.price)) &&
            (filters.type === "" || filters.type === undefined) &&
            (filters.brand === "" || filters.brand === undefined)
        )) {
            console.log("no search, returning all items");
            return data;
        }

        const filteredData = data.filter((item: Item) => {
            // must match all 
            return (
                (item.name === filters.name || filters.name === "") &&
                (filters.price >= item.price || filters.price === 0) &&
                (item.type === filters.type || filters.type === "") &&
                (item.brand === filters.brand || filters.brand === "")
            );
        });
        return filteredData;
    };

    return (
        <Wrapper>
            <div className="container">
                <div className="row">
                    <Title color="gray">Item Inventory Tracker</Title>
                </div>
                <div className="row mt-3">
                    <SearchBar updateSearchParams={updateFilters} />
                </div>
                <div className="row mt-3">
                    <ItemsDisplay items={filterData(data.items)} deleteItem={deleteItem} />
                </div>
                <div className="row mt-3">
                    <AddItem addItem={addItemToData} />
                </div>
            </div>
        </Wrapper>
    );
}

export default App;
