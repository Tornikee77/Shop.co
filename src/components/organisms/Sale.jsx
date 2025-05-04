const Sale = ({ color, size, text }) => {
  return <div className={`rounded ${color} ${size}`}>{text}</div>;
};

export default Sale;
