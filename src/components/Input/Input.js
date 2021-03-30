import React from 'react';
import Link from '../../images/close.svg';

const Input = ({ handleChange, value, setIsVisible }) => {
  return (
    <>
      <input
        type="text"
        className="block-b__input"
        placeholder="Enter your email to get your plan"
        name="input-data"
        value={value}
        onChange={handleChange}
        required
      />
      <button className="close" onClick={() => setIsVisible(false)}>
        <img className="close_pic" src={Link} alt="close"/>
      </button>
    </>
  )
}

export default Input;