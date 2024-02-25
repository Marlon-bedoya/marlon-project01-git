import './style/PhrasesCard.css'

const PhrasesCard = ({phrasesRandom}) => {
    const {phrase} = phrasesRandom
  return (

    <p className='Card__phrases'>{phrase}</p>
  )
}

export default PhrasesCard