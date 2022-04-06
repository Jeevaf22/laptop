import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product } = useFetch("https://fakestoreapi.com/products/" + id);
  const navigate = useNavigate();
  return (
    <div className="productdetail">
      {product && (
        <>
          <h1 className="h1">{product.title}</h1>
          <p className="desc">{product.description}</p>
          <h3 className="price">Pirce: {product.price}</h3>
          <div className="product-picture">
            <img src={product.image} alt="laptop" />
          </div>
          <h4 className="h1">Lorem, ipsum dolor.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            iusto itaque quasi minima sed, neque cum soluta quos dolorum, id
            vero odit dolore dolores? Amet
            <span className="sp">animi vitae</span> suscipit qui dolore impedit
            est, eveniet dolor, ad magni quas doloribus? Sequi molestiae saepe
            optio sunt magni molestias ipsam laboriosam corrupti eos quos!
            Velit, incidunt earum! Ipsam ad nisi voluptas vitae nostrum neque?
          </p>
          <h4 className="h1">Lorem, ipsum.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi labore
            reiciendis consequatur <span className="sp"> aliquid</span> ut
            accusamus ipsum corporis dolore necessitatibus, odio obcaecati animi
            quod adipisci debitis, ipsam, commodi accusantium! Omnis,
            architecto.
          </p>
          {/* Back to home button */}
          <div>
            <button className="btn-back" onClick={() => navigate("/")}>
              Back to home
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
