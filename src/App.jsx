import { useState } from 'react'
import './App.css'
import Author from './components/Author'
import QuoteBox from './components/QuoteBox'
import quotes from './quotes.json'

function App() {
  //buscando número random para obtener la posición aleatoria
  
  const rdmIndex = Math.floor(Math.random() * quotes.length)
  const [pos, setPos] = useState(rdmIndex);

  const changeQuote = () => {
    const anotherRdm = Math.floor(Math.random() * quotes.length)
    setPos (anotherRdm)
    }

  //buscando el color random desde un arreglo con colores
  const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"]
  const randomColorsIndex = Math.floor(Math.random() * colors.length)
  
  return (
    <div className="App" >
      <div >
        <QuoteBox 
            pos ={pos}
            color={colors[randomColorsIndex]}
            changeQuote={changeQuote}
        />
      </div>
      <Author/>
    </div>
  )
}

export default App
