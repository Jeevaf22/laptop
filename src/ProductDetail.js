import { useParams, Link } from "react-router-dom";
const ProductDetail = () => {
  const { title, description, price } = useParams();

  return (
    <div className="productdetail">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet atque
        saepe adipisci tempora ipsam? Obcaecati quasi unde repudiandae, eius
        delectus voluptatibus explicabo fugit commodi, enim alias blanditiis a
        qui rerum?
      </p>

      <h1 className="h1">{title}</h1>
      <p className="desc"> {description}</p>
      <h3>Pirce: {price}</h3>
      {/* <img src={img} alt="laptop" /> */}
      <br />
      <h4 className="h1">Lorem, ipsum dolor.</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto
        itaque quasi minima sed, neque cum soluta quos dolorum, id vero odit
        dolore dolores? Amet <span className="sp"> animi vitae</span> suscipit
        qui dolore impedit est, eveniet dolor, ad magni quas doloribus? Sequi
        molestiae saepe optio sunt magni molestias ipsam laboriosam corrupti eos
        quos! Velit, incidunt earum! Ipsam ad nisi voluptas vitae nostrum neque?
      </p>
      <h4 className="h1">Lorem, ipsum.</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi labore
        reiciendis consequatur <span className="sp"> aliquid</span> ut accusamus
        ipsum corporis dolore necessitatibus, odio obcaecati animi quod adipisci
        debitis, ipsam, commodi accusantium! Omnis, architecto.
      </p>
      <div className="btn-back">
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
