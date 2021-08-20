
import Fox1 from '../../images/FoxHead1.png';


function About(props) {
  return (
    <main className='about'>
      <img className='about__fox-image' alt='Cartoon fox head in a circle' src={Fox1}/>
      <div className='about__content'> 
      
        <p className='about__p'>
        The <div className='highlight'>Finnegan Fox</div> series of books features <div className='highlight'> real animals </div> that live at
         <div className='highlight'> SaveAFox Rescue in Minnesota.</div></p>
         <p className='about__p optional'>In cartoon form, they share their
        stories - based on their real life adventures - that both <div className='highlight'>entertain </div>
         and <div className='highlight'> educate</div> kids and kids at heart. </p>
         <p className='about__p optional'>Proceeds put  <div className='highlight'>food in bowls </div>at the
        rescue and provide care for the animals at SaveAFox. Buy a book,
        save a fox! </p>
        <div className='about__tail'></div>
</div>

     </main>
        )
}

export default About;
