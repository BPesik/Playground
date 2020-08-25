import React from "react";
import { render } from "enzyme";
import List from "./index";

const items = ["item one", "item two", "item three"];

describe("The DynamicTable component", () => {
    const wrapper = render(<List items={items} onClick={() => { }}/>)
    
    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("should contain correct amount of items", () => {
        expect(wrapper[0].children.length).toBe(3);
    })
    it("should render correct value in second item", () => {
        expect(wrapper[0].children[1].firstChild.data).toBe("item two");
    })
})
