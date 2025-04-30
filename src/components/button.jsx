const Button = ({ text, color, size, img }) => {
  return (
    <button className={`rounded ${color} ${size} ${img}`}>
      {img && <img src={img} alt="icon" className="w-5 h-5" />}
      {text}
    </button>
  );
};

export default Button;
