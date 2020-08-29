import React from "react";
import { render } from "enzyme";
import Switch from "./index";

describe("The switch component", () => {
    const wrapper = render(<Switch onClick={() => {}}/>)

    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
