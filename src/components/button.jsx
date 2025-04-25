import React, { Children } from "react";

const button = ({ text, color, size }) => {
  return (
    <button text={text} color={color} size={size}>
      {Children}
    </button>
  );
};

export default button;
