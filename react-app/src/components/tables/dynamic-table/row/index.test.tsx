import React from "react";
import { render } from "enzyme";
import Row from "./index";
import { DataRow } from "../types";

const dataRow: DataRow = {
    cells: [
        {value: "one"}, 
        {value: "two"}, 
        {value: "three"}
    ]
}

describe("The DynamicRow component", () => {
    const wrapper = render(<Row dataRow={dataRow}/>)

    
    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("should render correct amount of cells", () => {
        expect(wrapper.find("td").length).toEqual(3);
    })
})
