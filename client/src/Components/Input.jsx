import React from 'react'

function Input(props) {
    const { type, id, name } = props;
  return (
        <input type={type} id={id} name={name} required/>
  )
}

export default Input;