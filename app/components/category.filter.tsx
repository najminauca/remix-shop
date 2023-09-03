import {Dropdown, Form} from "react-bootstrap";

export default function CategoryFilterComponent(
    {categoryA, aCategoryHandler, categoryB, bCategoryHandler, categoryC, cCategoryHandler}
) {
    return (
        <Dropdown className={"filter-container"}>
            <Dropdown.Toggle variant={"success"} className={"filter-button"}>
                Category
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Form.Check
                    type="checkbox"
                    id={`A-category`}
                    label={"Gaming"}
                    checked={categoryA}
                    onChange={aCategoryHandler}
                    className={"dropdown-checkbox"}
                />

                <Form.Check
                    type="checkbox"
                    id={`B-category`}
                    label={"Decorations"}
                    checked={categoryB}
                    onChange={bCategoryHandler}
                    className={"dropdown-checkbox"}
                />

                <Form.Check
                    type="checkbox"
                    id={`C-category`}
                    label={"Household"}
                    checked={categoryC}
                    onChange={cCategoryHandler}
                    className={"dropdown-checkbox"}
                />
            </Dropdown.Menu>
        </Dropdown>
    );
}