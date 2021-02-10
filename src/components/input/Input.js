import React from 'react';
import './Input.css';

function Input(props) {
  const { variant = 'small' } = props;
  return (
    <input type="text" className={`input ${variant}`} placeholder="Data"></input>
  )
}

export default Input;