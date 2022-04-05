import Navbar from "./Navbar";
import Product from "./Product";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./About";
import Footer from "./Footer";
import NotFound from "./NotFound";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
