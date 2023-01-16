import React, { useState, useRef, useEffect } from "react";

const FormInput = () => {
    const renderCount = useRef(0);

    // Controlled Input
    const [firstName, setFirstName] = useState("");

    // Uncontrolled Input
    const lastNameInput = useRef();

    useEffect(() => {
        // Helper to compute the amount of renders
        renderCount.current += 1;
    }, []);

    useEffect(() => {
        // Focus on the lastname input upon refresh
        lastNameInput.current?.focus();
    }, []);

    const formHandler = () => {
        const data = {
            firstName,
            lastName: lastNameInput.current?.value
        };
        console.log(`Current Data: ${data}`);
    }

    return (
        <div>
            <h3>handling Form Inputs</h3>

            <form>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    placeholder="Your First Name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)} />

                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    placeholder="Your Last Name"
                    ref={lastNameInput} />

                <button type="button" onClick={formHandler}>Submit</button>
            </form>
            <p>Number of Re-Renders: {renderCount.current}</p>
        </div>
    );
};

export default FormInput;