import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

const Container = ({ products }) => {
  // State
  const [title, setName] = useState("");
  const [list, setList] = useState(products);

  // Search filter
  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = products.filter((user) => {
        return user.title.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setList(results);
    } else {
      setList(products);
    }
    setName(keyword);
  };

  return (
    <div>
      {/* Input */}
      <Input title={title} filter={filter} text="Filter products" />
      {/* Container */}
      <div className="card-container">
        {list && list.length > 0 ? (
          list.map((product) => (
            <Link
              to={`/products/${product.id}`}
              className="product-link"
              key={product.id}
            >
              <div className="product-card">
                <div className="product-image">
                  <img src={product.img} alt="laptop" />
                </div>
                <h3 className="title">{product.title}</h3>
                <p className="description">{product.description}</p>
                <div className="product-cart">
                  <span className="span">{product.price}</span>
                  <Button
                    btnText="Buy"
                    style={{ backgroundColor: "#6bcb77" }}
                  />
                  <Button btnText="Bookmark" />
                </div>
              </div>
            </Link>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
};

export default Container;
