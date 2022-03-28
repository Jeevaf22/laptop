const Button = (props) => {
  return (
    <button className="btn" style={props.style}>
      {props.btnText}
    </button>
  );
};

export default Button;
