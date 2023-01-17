import { ChangeEvent, useContext } from "react";
import { CounterContext } from "../components/CounterContext";

type UseCounterMessageHookType = {
    message: string;
    handlePayload: (e: ChangeEvent<HTMLInputElement>) => void
}

// Use custom hooks to extract wanted stuff from Context instead of always using useContext
export const useCounterMessageHook = (): UseCounterMessageHookType => {
    const {
        state: { message },
        handlePayload
    } = useContext(CounterContext)

    return { message, handlePayload }
}