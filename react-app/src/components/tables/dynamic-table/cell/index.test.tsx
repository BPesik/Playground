import React from "react";
import { render } from "enzyme";
import Cell from "./index";

describe("The DynamicCell component", () => {
    const wrapper = render(<Cell dataCell={{value: "testValue"}}/>)
    
    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("should contain the right value", () => {
        expect(wrapper[0].firstChild.data).toEqual("testValue");
    })
})
