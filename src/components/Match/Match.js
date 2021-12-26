
import React, { useState, useEffect } from 'react';

import Card from '../Card/Card'


import Dixie from "../../images/cards/foxDixie.png"
import Fin from "../../images/cards/foxFin.png"
import Kipper from "../../images/cards/foxKipper.png"
import Mala from "../../images/cards/foxMala.png"
import Mouse from "../../images/cards/foxMouse.png"
import Nebraska from "../../images/cards/foxNebraska.png" 
import Nikita from "../../images/cards/foxNikita.png" 
import Valentine from "../../images/cards/foxValentine.png"

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
}

useEffect(()  => {
 if (firstGuess && secondGuess) 
 {
  if (firstGuess.name === secondGuess.name)
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
<div className='fun' id='fun'>
  
      <div className='fun__heading'>Matching Game</div>
     <p className='fun__subheading'>Match the faces of these real residents of Save A Fox.</p>
        <div className='fun__container'>
         <div className='fun__bg'></div>
         <div className='match__alert-landscape'>
           Phone must be in landscape mode to play.
         </div>
        <div className='match'>
          <div className="match__userBox">

          <div className='match__game-area'> 

          <div className='match__userInfo'>Tries: {attempts}</div>
  <button onClick={shuffleCards} defaultValue="Reset" className="resetGame">New Game</button>
           </div>
           <div className="match__grid">
                {cards.map(card => (
                  <Card 
                  handleGuess={handleGuess}
                  card={card} 
                  flipped={card === firstGuess || card === secondGuess || card.matched}/>
                ))}
               
          </div> 
 
              
         
         </div>
        </div> 

        </div>
        </div>
    );
  }




export default Match;