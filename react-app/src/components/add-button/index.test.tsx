import React from "react";
import { render } from "enzyme";
import AddButton from "./index";

test("Expect add button to match snapshot", () => {
    const component = render(<AddButton onClick={() => {}} color="grey" size="M"/>)

    expect(component).toMatchSnapshot();
})