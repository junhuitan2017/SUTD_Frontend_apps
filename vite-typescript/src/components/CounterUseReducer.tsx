import { ChangeEvent, ReactNode, useReducer } from "react";

// Define initial state for the reducer
const initState = {
    count: 0,
    message: ""
};

// Define action type with enum
const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT
};

type ReducerAction = {
    type: REDUCER_ACTION_TYPE;
    payload?: string;
}

// Reducer function receives current state and action
// returns a new state based on the action
const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 };
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 };
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return { ...state, message: action.payload ?? "" };
        default:
            throw new Error();
    }
};

type ChildrenType = {
    // Children is a function that accepts one input which is a number, and return a react node
    children: (num: number) => ReactNode
};

const CounterUseReducer = ({ children }: ChildrenType) => {
    const [state, dispatch] = useReducer(reducer, initState);

    return <>
        <h1>{children(state.count)}</h1>
        <div>
            <button onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })}>+</button>
            <button onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })}>-</button>
            <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) =>
                dispatch({
                    type: REDUCER_ACTION_TYPE.NEW_INPUT,
                    payload: e.target.value
                })} />
            <h3>{state.message}</h3>
        </div>
    </>
};

export default CounterUseReducer;