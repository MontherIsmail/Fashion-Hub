import React from "react";

function Input(props) {
  const { type, id, name, value, placeholder, handleChange, label } = props;
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
        required
      />
    </>
  );
}

export default Input;
