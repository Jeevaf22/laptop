const Button = ({ style, btnText }) => {
  return (
    <button className="btn" style={style}>
      {btnText}
    </button>
  );
};

export default Button;
