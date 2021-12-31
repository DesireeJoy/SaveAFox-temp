 
import React from 'react';

function Card(props) {

    const handleCardClick = () => {
        if (!props.disabled){
        props.handleGuess(props.card)
        }
    }
    console.log(`Flipped is ${props.flipped}`)
return(
            <div className='match__card' key={props.card.id}>
              <div className={props.flipped ? 'card__rotate' : ''}>
           <img  
           className='match__card-front' 
           src={require(`../../images/cards/fox${props.card.name}.png`)}
           alt='card front'/>
           <img 
               src={require("../../images/cards/cardBack.png")} 
               onClick={handleCardClick} className='match__card-back' 
               alt='card back'/>
          
               
              </div>
              </div>
             
)}
    export default Card;