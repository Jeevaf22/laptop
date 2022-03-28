import Button from "./Button";

const Container = ({ list }) => {
  return (
    <div className="card-container">
      {list && list.length > 0 ? (
        list.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.img} alt="product image" />
            </div>
            <h3 className="title">{product.title}</h3>
            <p className="description">{product.description}</p>
            <div className="product-cart">
              <span className="span">{product.price}</span>
              <Button btnText="Buy" style={{ backgroundColor: "#6bcb77" }} />
              <Button btnText="Bookmark" />
            </div>
          </div>
        ))
      ) : (
        <h1>No results found!</h1>
      )}
    </div>
  );
};

export default Container;
