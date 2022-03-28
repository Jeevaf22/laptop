const Input = ({ title, filter, text }) => {
  return (
    <div className="input">
      <input type="search" value={title} onChange={filter} />
      <p>{text}</p>
    </div>
  );
};

export default Input;
