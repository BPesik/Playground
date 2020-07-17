import React from "react"
import Header from "./components/Header/index"
import Footer from "./components/Footer/index"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./pages/about/index";
import Data from "./pages/data/index";

function App() {
  return (
    <>
      <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Data">
            <Data />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;
