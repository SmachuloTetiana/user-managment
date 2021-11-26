import React from "react";
import { render, shallow } from "enzyme";
import AlertComponent from "./Alert";

describe("Alert component", () => {
    test("should render Alert component with props", () => {
        const testText = 'test error';
        const component = shallow(<AlertComponent severity="error" text={testText} />);

        expect(component.text()).toMatch(testText);
    })
})