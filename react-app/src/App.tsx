import React from "react"
import Footer from "./components/footer/index"
import Header from "./components/header/index"
import {
  Switch,
  Route
} from "react-router-dom";
import About from "./pages/about/index";
import Todos from "./pages/todos/index";

function App() {
  return (
    <>
      <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Todos">
            <Todos />
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
