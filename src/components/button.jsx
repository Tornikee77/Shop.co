const Button = ({ text, color, size }) => {
  return <button className={`rounded ${color} ${size}`}>{text}</button>;
};

export default Button;
