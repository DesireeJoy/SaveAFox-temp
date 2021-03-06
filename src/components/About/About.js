
import Fox1 from '../../images/FoxHead2.png';
import React from 'react';
    import { Slide } from "react-awesome-reveal";

function About(props) {
  return (
    <div className='about'>

      <img className='about__fox-image' alt='Cartoon fox head in a circle' src={Fox1}/>
      <Slide direction='right'>
      <div className='about__content'> 
      
        <p className='about__p'>
        The <span className='highlight'>Finnegan Fox</span> series of books features <span className='highlight'> real animals </span> that live at
         <span className='highlight'> SaveAFox Rescue in Minnesota.</span></p>
         <p className='about__p optional'>In cartoon form, they share their
        stories - based on their real life adventures - that both <span className='highlight'>entertain </span>
         and <span className='highlight'> educate</span> kids and kids at heart. </p>
         <p className='about__p optional'>Proceeds put  <span className='highlight'>food in bowls </span>at the
        rescue and provide care for the animals at SaveAFox. Buy a book,
        save a fox! </p>
        <div className='about__tail'></div>
</div>
 </Slide>
     </div>
        )
}

export default About;
