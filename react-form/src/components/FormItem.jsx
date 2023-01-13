import { Form } from "react-bootstrap";

export const FormItem = ({ item, onChange, answer }) => {
    switch (item.type) {
        case "text":
            return <>
                <Form.Label>{item.label}</Form.Label>
                <Form.Control
                    type="text"
                    id={item.label}
                    onChange={e => onChange(e.target.value, item.value)}
                    value={answer || ""} // * Controlled Form
                />
            </>;
        case "password":
            return (
                <>
                    <Form.Label htmlFor="passwordField">{item.label}</Form.Label>
                    <Form.Control
                        type="password"
                        id="passwordField"
                        defaultValue=""
                        aria-describedby="passwordHelpBlock"
                        onChange={(e) => onChange(e.target.value, item.value)}
                    />
                </>
            );
        case "information":
            return <p>{item.label}</p>;
        case "select":
            return (
                <div className="mt-2">
                    <Form.Select
                        value={answer || "DEFAULT"}
                        aria-label={item.label}
                        onChange={(e) => onChange(e.target.value, item.value)}
                    >
                        <option value={"DEFAULT"} disabled>
                            Please select your state
                        </option>

                        {item.options.map((opt, index) => {
                            return <option value={opt}>{opt}</option>;
                        })}
                    </Form.Select>
                </div>
            );
        default:
            return <></>;
    }
}