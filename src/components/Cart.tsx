import React from "react";

interface Props {
  cartItems: string[];
  onClear: () => void;
}
const cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div> Cart </div>
      <ul>
        {cartItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button type="button" onClick={onClear}>
        Clear
      </button>
    </>
  );
};

export default cart;
