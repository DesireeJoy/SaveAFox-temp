
import React, { useState, useEffect } from 'react';

import Card from '../Card/Card'



const foxNames = [
    { "name" : "Dixie", matched: false },
    { "name" : "Fin", matched: false },
    { "name" : "Kipper", matched: false },
    { "name" : "Mala" , matched: false},
    { "name" : "Mouse" , matched: false},
    { "name" : "Nebraska", matched: false },
    { "name" : "Nikita", matched: false },
    { "name" : "Valentine", matched: false }

];

function Match() {

  const [cards, setCards] = useState([])
  const [attempts, setAttempts] = useState(0)
  const [firstGuess, setFirstGuess] = useState(null)
  const [secondGuess, setSecondGuess] = useState(null)
  const [disabled, setDisabled]= useState(false)

const shuffleCards = () =>{
  const shuffledCards = [...foxNames, ...foxNames].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }));
console.log(shuffledCards)
setCards(shuffledCards)
setAttempts(0)
} 

const resetGuess = () => {
  setFirstGuess(null)
  setSecondGuess(null)
  setAttempts(attempts + 1)
  setDisabled(false)
}

useEffect(()  => {
  
 if (firstGuess && secondGuess) 
 {
   setDisabled(true)
  if ((firstGuess.name === secondGuess.name) && (firstGuess.id !== secondGuess.id))
    {
    setCards(prevCards => 
      {
        return prevCards.map(card => 
        {
          if (card.name === secondGuess.name)
          {
            return {...card, matched: true}
          }
          else
          {
            return { ...card}
          }
        })
      } )
       resetGuess();
    }
       else{
          setTimeout(() =>  resetGuess(), 1000)
        }
  }

},[firstGuess, secondGuess])
  

console.log(cards)

//handle guess

const handleGuess = (card) => {
firstGuess ? setSecondGuess(card) : setFirstGuess(card)
}

    return (
<div  >
  
         <div className='match__alert-landscape'>
           Phone must be in landscape mode to play.
         </div>
        <div className='match'>
          <div className="match__userBox">

          <div className='match__game-area'> 
         <button onClick={shuffleCards} defaultValue="Reset" className="resetGame">New Game</button>
          <div className='match__userInfo'>Tries:&nbsp;
          <span className={attempts > 8 ? 'match-highlight' : ''}>{attempts}</span> </div>
 
           </div>
           <div className="match__grid">
                {cards.map(card => (
                  <Card 
                  handleGuess={handleGuess}
                  card={card} 
                  flipped={card === firstGuess || card === secondGuess || card.matched}
                  disabled={disabled} />
                ))}
               
          </div> 
 
              
         
         </div>
        </div> 

        </div>
     
    );
  }




export default Match;