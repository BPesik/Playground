import React from "react";
import { render } from "enzyme";
import Footer from "./index"

describe("The Footer component", () => {
    const wrapper = render(<Footer />)
    
    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("should render the correct link", () => {
        expect(wrapper[0].firstChild.name).toBe("a");
        expect(wrapper[0].firstChild.firstChild.data).toBe("Learn React");
    });
});
