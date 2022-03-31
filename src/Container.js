import Button from "./Button";

import { Link } from "react-router-dom";

const Container = ({ list }) => {
  return (
    <div className="card-container">
      {list && list.length > 0 ? (
        list.map((product) => (
          <Link
            to={`/productdetail/${product.id}/${product.title}/${product.description}/${product.price}/${product.img}`}
            className="product-link"
            key={product.id}
          >
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.img} alt="laptop" />
              </div>
              <h3 className="title">{product.title}</h3>
              <p className="description">{product.description}</p>
              <div className="product-cart">
                <span className="span">{product.price}</span>
                <Button btnText="Buy" style={{ backgroundColor: "#6bcb77" }} />
                <Button btnText="Bookmark" />
              </div>
            </div>
          </Link>
        ))
      ) : (
        <h1>No results found!</h1>
      )}
    </div>
  );
};

export default Container;
