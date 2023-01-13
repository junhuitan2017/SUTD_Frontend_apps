export const questions = [
    {
        section: 1,
        items: [
            {
                label: "username",
                type: "text",
                value: "username",
            },
            {
                label: "password",
                type: "password",
                value: "password",
            },
        ],
    },
    {
        section: 2,
        items: [
            {
                label: "Street Address",
                type: "text",
                value: "street",
            },
            {
                label: "Postal code",
                type: "text",
                value: "postalcode",
            },
            {
                label: "State",
                type: "select",
                value: "state",
                options: ["State 1", "State 2"],
            },
        ],
    },
    {
        section: 3,
        items: [
            {
                label: "If you are ready to submit please press `Submit`",
                type: "information",
            },
        ],
    },
];
