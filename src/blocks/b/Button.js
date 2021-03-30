import React from 'react';

const Button = ({ addInput }) => {
  return (
    <button
      type="button"
      className="button"
      onClick={addInput}
    >
      Get my plan
    </button>
  )
}

export default Button;