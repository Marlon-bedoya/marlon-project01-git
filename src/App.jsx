
import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRandomFromArray from './utils/getRandomFromArray'
import PhrasesCard from './components/PhrasesCard'
import ButtomP from './components/ButtomP'
import arrImages from './utils/arrimages.json'

function App() {

const intialValue = getRandomFromArray(phrases)
 const [phrasesRandom, setphrasesRandom] = useState(intialValue)

 const initialImge = getRandomFromArray(arrImages)
 const [imageSelected, setimageSelected] = useState(initialImge)
 
const objStyle = {
   backgroundImage: `url("/fondo${imageSelected}.png")`
}

  return (
   <div className='app' style={objStyle}>
      <h1 className='app__title'>Galleta de la fortuna</h1>
      <article className='app__phrase'><PhrasesCard phrasesRandom={phrasesRandom}/></article>
      <article className='app__Buttom'><ButtomP setphrasesRandom={setphrasesRandom}
      setimageSelected={setimageSelected}
      /></article>
   </div>
  )
}

export default App
