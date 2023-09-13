import {Dropdown, Form} from "react-bootstrap";

export default function ColorFilterComponent(
    {colorR, rColorHandler, colorG, gColorHandler, colorB, bColorHandler}
) {
    return (
        <Dropdown className={"filter-container"}>
            <Dropdown.Toggle variant={"success"} className={"filter-button"}>
                Color
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Form.Check
                    type="checkbox"
                    value="R-color"
                    id={`R-color`}
                    label={"Red"}
                    checked={colorR}
                    onChange={rColorHandler}
                    className={"dropdown-checkbox"}
                />
                <Form.Check
                    type="checkbox"
                    id={`G-color`}
                    label={"Green"}
                    checked={colorG}
                    onChange={gColorHandler}
                    className={"dropdown-checkbox"}
                />
                <Form.Check
                    type="checkbox"
                    id={`B-color`}
                    label={"Blue"}
                    checked={colorB}
                    onChange={bColorHandler}
                    className={"dropdown-checkbox"}
                />
            </Dropdown.Menu>
        </Dropdown>
    );
}