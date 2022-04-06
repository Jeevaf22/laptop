import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about">
      <h2>Introduction</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed ipsam
        architecto facilis enim consectetur magni accusamus vel, quod quidem
        accusantium possimus rem <span>eligendi</span> consequatur. Ipsum
        necessitatibus doloribus praesentium repudiandae!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed ipsam
        architecto facilis enim consectetur magni <span> accusamus vel</span>,
        quod quidem accusantium possimus rem eligendi consequatur. Ipsum
        necessitatibus doloribus praesentium repudiandae!
      </p>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed ipsam
        architecto facilis enim <span> consectetur magni</span> accusamus vel,
        quod quidem accusantium possimus rem eligendi consequatur. Ipsum
        necessitatibus doloribus praesentium repudiandae!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed ipsam
        architecto facilis enim <span> consectetur </span>magni accusamus vel,
        quod quidem accusantium possimus rem eligendi consequatur. Ipsum
        necessitatibus doloribus praesentium repudiandae!
      </p>
      <h2>Lorem ipsum dolor sit.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed ipsam
        architecto facilis enim <span> consectetur magni</span> accusamus vel,
        quod quidem accusantium possimus rem eligendi consequatur. Ipsum
        necessitatibus doloribus praesentium repudiandae!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed ipsam
        architecto facilis enim <span> consectetur </span>magni accusamus vel,
        quod quidem accusantium possimus rem eligendi consequatur. Ipsum
        necessitatibus doloribus praesentium repudiandae!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, rem odit
        nesciunt nemo quas a necessitatibus libero quo delectus ullam ea!
        Perferendis debitis consectetur non nam omnis. Facilis neque consectetur
        repellendus eaque distinctio, ea illo, quo illum, numquam quaerat
        corporis.
      </p>
      {/* Back to home button */}
      <div>
        <button className="btn-back" onClick={() => navigate("/")}>
          Back to home
        </button>
      </div>
    </div>
  );
};

export default About;
