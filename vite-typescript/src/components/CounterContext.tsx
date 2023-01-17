import {
    ChangeEvent,
    ReactElement,
    createContext,
    useReducer,
    useCallback
} from "react";

type StateType = {
    count: number;
    message: string;
}

// Define initial state for the reducer
export const initState = {
    count: 200,
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

type useCounterContextType = {
    state: StateType;
    increment: () => void;
    decrement: () => void;
    handlePayload: (e: ChangeEvent<HTMLInputElement>) => void;
};

// Custom Hook that will call useReducer for us
// returns state, increment, decremnt, handlePayload
const useCounterContext = (initState: StateType): useCounterContextType => {
    const [state, dispatch] = useReducer(reducer, initState);

    // ! Alot of component will be using this
    // ! So cannot let it be re-render everytime
    // * So use useCallback
    const increment = useCallback(() => {
        dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
    }, []); // * Need empty dep arr else will be useless
    const decrement = useCallback(() => {
        dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
    }, []);
    const handlePayload = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value });
    }, []);

    return { state, increment, decrement, handlePayload };
}

// ! This is not a type
// * This is an init object for counter context
// This uses comma, indicating that it is an object
const initContextState: useCounterContextType = {
    state: initState,
    increment: () => {},
    decrement: () => {},
    handlePayload: (e: ChangeEvent<HTMLInputElement>) => {}
}

// Create the counter context using the initialised context state above
export const CounterContext = createContext<useCounterContextType>(initContextState);

// For each context created, we need a context provider
type ChildrenType = {
    children: ReactElement[] | undefined;
};

// * Use a context so that all the children can use the states in here
export const CounterProvider = ({children, ...initState}: ChildrenType & StateType): ReactElement => {
    return (
        <CounterContext.Provider value={useCounterContext(initState)}>
            {children}
        </CounterContext.Provider>
    )
}