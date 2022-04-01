import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Container = ({ list }) => {
  let [result, setResult] = useState(list);
  console.log(result);
  setResult = (output) => {
    let pictureImage = output.img;
    console.log(pictureImage);
  };
  return (
    <div className="card-container">
      {list && list.length > 0 ? (
        list.map((product) => (
          <Link
            to={`/productdetail/${product.id}/${product.title}/${product.description}/${product.price}/`}
            className="product-link"
            key={product.id}
            onClick={() => setResult(product)}
          >
            <div className="product-card">
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
