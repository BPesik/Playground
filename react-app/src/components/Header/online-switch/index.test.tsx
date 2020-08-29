import React from "react";
import { render, shallow } from "enzyme";
import OnlineSwitch from "./index";
import Switch from "../../switch/index";

describe("The online-switch component", () => {
    const wrapper = render(<OnlineSwitch onChange={() => {}}/>);

    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("should render the correct label", () => {
        expect(wrapper[0].firstChild.name).toBe("b");
        expect(wrapper[0].firstChild.firstChild.data).toBe("ONLINE: ");
    });
    it("should render Switch component", () => {
        const shallowWrapper = shallow(<OnlineSwitch onChange={() => {}}/>)

        expect(shallowWrapper.containsMatchingElement(<Switch onClick={() => {}}/>))
    });
});