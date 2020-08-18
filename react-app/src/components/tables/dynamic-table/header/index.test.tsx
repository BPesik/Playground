import React from "react";
import { render } from "enzyme";
import DynamicHeader from "./index";
import { DataHeader } from "../types";

const dataHeader: DataHeader = {
    cells: [
        {value: "one"}, 
        {value: "two"}, 
        {value: "three"}
    ]
}

describe("The DynamicCell component", () => {
    const wrapper = render(<DynamicHeader dataHeader={dataHeader}/>)
    
    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("should render correct amount of headerCells", () => {
        expect(wrapper.find("th").length).toEqual(3);
    });
});
