import Navbar from "./Navbar";
import Product from "./Product";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Product />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
