import React from "react";
import { render } from "enzyme";
import Header from "./index";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { onlineStatusReducer } from "../../store/online-status/reducers";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const mockedStore = createStore(onlineStatusReducer);

describe("The header component", () => {
    const wrapper = render(
        <Provider store={mockedStore}>
            <Router history={createMemoryHistory()}>
                <Header/>
            </Router>
        </Provider>
    );
    
    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("should render the title", () => {
        expect(wrapper[0].firstChild.firstChild.firstChild.data).toBe("PLAYGROUND");
    });
    it("should render the title", () => {
        expect(wrapper[0].firstChild.firstChild.firstChild.data).toBe("PLAYGROUND");
    });
    it("should render Navlinks", () => {
        expect(wrapper[0].children[1].children.length).toBe(2);
        expect(wrapper[0].children[1].firstChild.firstChild.data).toBe("About");
        expect(wrapper[0].children[1].children[1].firstChild.data).toBe("Todos");
    });
});