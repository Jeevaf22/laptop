import useFetch from "./useFetch";
import Container from "./Container";

const Product = () => {
  const { data: products, error } = useFetch("http://localhost:8000/products");

  return (
    <div className="container">
      {error && <div className="err">{error}</div>}
      {!error && <h1>Buy Laptops Online at Low Prices</h1>}
      {products && <Container products={products} />}
    </div>
  );
};

export default Product;
