import Navbar from "./Navbar";
import Product from "./Product";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import NotFound from "./NotFound";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Product />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/productdetail/:id/:title/:description/:price/:img">
            <ProductDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
