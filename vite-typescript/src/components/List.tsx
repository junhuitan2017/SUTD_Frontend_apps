import { ReactNode } from "react";

// * This is a genric type as item type is unknown beforehand
// T can be any name
interface ListProps<T> {
    items: T[];
    render: (item: T) => ReactNode;
}

// T is any object
// ? Use <T,> if want to allow null or undefined
// ? <T extends {}> means cannot be null or undefined
const List = <T extends {}>({items, render}:ListProps<T>) => {
    return (
        <ul>
            {items.map((item, i) => (
                <li key={i}>{render(item)}</li>
            ))}
        </ul>
    );
};

export default List;