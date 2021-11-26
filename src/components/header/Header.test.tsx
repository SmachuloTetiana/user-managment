import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../../store";

describe("Header component", () => {
    test("should render Header component", () => {
        const component = shallow(<Provider store={store}><Header /></Provider>);

        expect(component).toMatchSnapshot();
    })
})