import React from "react";
import { render } from "enzyme";
import DynamicHeaderCell from "./index";

describe("The DynamicHeaderCell component", () => {
    const wrapper = render(<DynamicHeaderCell dataHeaderCell={{value: "testValue"}}/>)
    
    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("should contain the right value", () => {
        expect(wrapper[0].firstChild.data).toEqual("testValue");
    })
})
