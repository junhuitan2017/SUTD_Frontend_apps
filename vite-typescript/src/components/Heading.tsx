import { ReactElement, useEffect, useState } from "react";
import { useCounterMessageHook } from "../hooks/UseCounterMessageHook";

type HeadingProps = {
    title: string;
};

const Heading = ({ title }: HeadingProps): ReactElement => {
    // Custom hook can be used here if is wrapped in the Context Provider
    const { message, handlePayload } = useCounterMessageHook();
    const [test, setTest] = useState(10);

    useEffect(() => {
        console.log("Mount");
        console.log(test);

        return () => {
            console.log("Cleanup");
        };
    }, [test]);

    return (
        <>
            <h1>{title}</h1>
            <h3>{message}</h3>
        </>
    )
};

export default Heading;