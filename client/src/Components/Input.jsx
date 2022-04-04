import React from "react";

function Input(props) {
  const { type, id, name, value, placeholder, handleChange, label, max, min } =
    props;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        max={max}
        min={min}
        required
      />
    </>
  );
}

export default Input;
