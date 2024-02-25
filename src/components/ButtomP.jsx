import getRandomFromArray from "../utils/getRandomFromArray"
import phrases from '../utils/phrases.json'
import arrImage from "../utils/arrimages.json";
import './style/ButtomP.css'


const ButtomP = ({setphrasesRandom,  setimageSelected}) => {

  const handleclick = () => {
    const phrase = getRandomFromArray(phrases)
    setphrasesRandom(phrase)
  
    const background = getRandomFromArray(arrImage)
    setimageSelected(background)  

  }
 

  return (
    <button className='app__Buttom' onClick={handleclick}>Probar mi suerte</button> 
  )
}

export default ButtomP