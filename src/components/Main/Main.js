
 import React from 'react';
 import About from '../About/About';
import Fun from '../Fun/Fun';
import Press from '../Press/Press';
import Books from '../Books/Books';
import Match from '../Match/Match';


function Main(props) {
  return (
    <main className='main'>
     
<About />
<Books />
<Fun 
downloadsShown={props.downloadsShown}
downloadLength={props.downloadLength}
handleShowMore={props.handleShowMore}/>
<Match />
<Press />


     
     </main>
        )
}




export default Main;
