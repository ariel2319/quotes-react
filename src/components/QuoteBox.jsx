//que esté centrado, el cuál debe mostrar una cita al azar al momento de cargar la aplicación.
import { useState } from 'react';
import quotes from '../quotes.json'

import React from 'react';

const QuoteBox = () => {
  const rdmIndex = Math.floor(Math.random() * quotes.length)
  const [pos, setPos] = useState(rdmIndex);

  const quote = `${quotes[pos].quote}`;
  const author = `${quotes[pos].author}`;

  const changeQuote = () => {
    const anotherRdm = Math.floor(Math.random() * quotes.length)
    setPos (anotherRdm)
  }


  const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"]
  const randomColorsIndex = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[randomColorsIndex]}`


  return (
    <div className='quote-container'>
      <h1 style={{color: colors[randomColorsIndex]}} >{quote}</h1>
      
      <div className='author-align'>
        <h2 style={{color: colors[randomColorsIndex]}}>{author}</h2>
      </div>
      <button onClick={changeQuote} style={{background: colors[randomColorsIndex]}}><i class="fa-solid fa-retweet" ></i></button>
    </div>
  );
};

export default QuoteBox;