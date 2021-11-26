import React, { ChangeEvent } from "react";
import { shallow } from "enzyme";
import InputComponent from "./Input";

const props = {
    label: "Test",
    name: "text",
    type: "text",
    value: "text",
    handleInput: () => {}
}

describe("Input component", () => {
    test("should render Input component with props", () => {
        const component = shallow(<InputComponent {...props} />);

        expect(component).toMatchSnapshot()
    });
})