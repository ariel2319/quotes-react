import React from 'react';

const ButtonChange = ({changeQuote, color}) => {
  return (
    
      <button onClick={changeQuote} style={{background: color}}><i class="fa-solid fa-retweet" ></i>
      </button>
    
  );
};

export default ButtonChange;