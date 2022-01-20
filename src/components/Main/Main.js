
 import React from 'react';
 import About from '../About/About';
import Fun from '../Fun/Fun';
import Press from '../Press/Press';
import Books from '../Books/Books';
import Match from '../Match/Match';
import Block from '../Block/Block'

//    downloadsShown={props.downloadsShown}
// downloadLength={props.downloadLength}
// handleShowMore={props.handleShowMore}


function Main(props) {
  return (
    <main className='main'>
     <About />
     <Block 
     heading='Finnegan Fox Books' 
     subheading='The Finnegan fox adventures are always growing and introducing new members of the Save A Fox gang.' 
     direction='left' 
     bg='bluebg' 
     ContentComponent={Books}/>

   <Block 
   heading='Finnegan Fun!' 
   subheading="There are many different shapes and sizes when it comes to mobile device screen size. We can't provide all of them. So we've done our best to average android and iphone screen sizes and size our images based on that information."
   direction='right' 
     bg= 'greenbg'
   ContentComponent={Fun}
/>
  
  <Block heading='Fox Match' 
  subheading='Match the faces of these real residents of Save A Fox. test' 
  direction='left' 
  bg= 'bluebg'
  ContentComponent={Match}/>

<Press />


     
     </main>
        )
}




export default Main;
