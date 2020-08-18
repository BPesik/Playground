import React from "react";
import { render } from "enzyme";
import DynamicTable from "./index";
import { DataHeader, DataRow } from "./types";

const dataHeader: DataHeader = {
    cells: [{value: "headerOne"},{value: "headerTwo"}]
}

const dataRows: DataRow[] = [
    {cells: [{value: "1:1"}, {value: "2:1"}]},
    {cells: [{value: "1:2"}, {value: "2:2"}]},
    {cells: [{value: "1:3"}, {value: "2:3"}]},
]

describe("The DynamicTable component", () => {
    const wrapper = render(<DynamicTable dataHeader={dataHeader} dataRows={dataRows}/>)
    
    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("should render correct amount of rows", () => {
        expect(wrapper.find("tbody").find("tr").length).toEqual(3);
    });
    it("should render correct amount of columns", () => {
        expect(wrapper.first().find("th").length).toEqual(2);
    });
})
