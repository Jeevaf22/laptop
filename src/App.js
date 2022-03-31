import Navbar from "./Navbar";
import Product from "./Product";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import NotFound from "./NotFound";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Product />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/productdetail/:id/:title/:description/:price/">
            <ProductDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

// /productdetail/:id/:title/:description/:price/
