import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navbar;