import React from 'react';

const Button = ({ text, className, disabled=false, onclick }) => {
  return (
      <button disabled={disabled} className={className} onClick = {onclick}>
        {text}
      </button>
  );
};

export default Button;
