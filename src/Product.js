import useFetch from "./useFetch";
import Container from "./Container";

const Product = () => {
  const {
    data: products,
    error,
    pending,
  } = useFetch("https://fakestoreapi.com/products");
  return (
    <div className="container">
      {error && <div className="err">{error}</div>}
      {!error && <h1>Shop E-Commerce Products at Low Prices</h1>}
      {pending && <div className="pending">Loading products...</div>}
      {products && <Container products={products} />}
    </div>
  );
};

export default Product;
