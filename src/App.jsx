import { useState } from 'react'
import './App.css'
import Author from './components/Author'
import QuoteBox from './components/QuoteBox'
/* import quotes from '../quotes.json' */

function App() {

  /* const rdmIndex = Math.floor(Math.random() * quotes.length)
  const [pos, setPos] = useState(rdmIndex);

  const quote = `${quotes[pos].quote}`;
  const author = `${quotes[pos].author}`;

  const changeQuote = () => {
  const anotherRdm = Math.floor(Math.random() * quotes.length)
  setPos (anotherRdm)
  }


  const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"]
  const randomColorsIndex = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[randomColorsIndex]}` */


  return (
    <div className="App">
      <QuoteBox/>
      <Author/>
    </div>
  )
}

export default App
