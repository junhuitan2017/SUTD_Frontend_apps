import { ChangeEvent, ReactElement, useState } from "react";
import styles from "../AddItem.module.css";
import { Item } from "../App";

type AddItemType = {
    addItem: (item: Item) => void;
}

const AddItem = ({addItem}: AddItemType): ReactElement => {
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [type, setType] = useState<string>("");
    const [brand, setBrand] = useState<string>("");
    
    const addItemButtonPressed = () => {
        addItem({
            name: name,
            price: price,
            type: type,
            brand: brand,
        });
        setName("");
        setPrice(0);
        setType("");
        setBrand("");
    };

    const resetButtonPressed = () => {
        setName("");
        setPrice(0);
        setType("");
        setBrand("");
    };

    return (
        // the Search button is not a submit button
        // set to be just a regular button
        <div className="container">
            <div className="row">
                <h2>Add an Item</h2>
            </div>
            <form onReset={resetButtonPressed}>
                <div className="row">
                    <label htmlFor="name-field">Name: </label>
                    <input
                        id="name-field"
                        className="form-control"
                        type="text"
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setName(e.target.value);
                        }}
                    />
                    <label htmlFor="price-field">Price: </label>
                    <input
                        id="price-field"
                        type="number"
                        className="form-control"
                        value={price}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setPrice(parseFloat(e.target.value));
                        }}
                    />
                    <label htmlFor="type-field">Type: </label>
                    <input
                        id="type-field"
                        type="text"
                        className="form-control"
                        value={type}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setType(e.target.value);
                        }}
                    />
                    <label htmlFor="brand-field">Brand: </label>
                    <input
                        id="brand-field"
                        className="form-control"
                        type="text"
                        value={brand}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setBrand(e.target.value);
                        }}
                    />
                </div>
                <div className="row mt-3">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={addItemButtonPressed}
                    >
                        Add Item
                    </button>
                </div>
                <div className="row mt-3">
                    {/* fake col-4 stuff */}
                    <div className="col col-5"></div>
                    <button type="reset" className={"col-2 btn " + styles.error}>
                        RESET
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddItem;