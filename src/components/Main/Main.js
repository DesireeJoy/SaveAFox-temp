
 import React from 'react';



 import About from '../About/About';
  import Fun from '../Fun/Fun';
  import Press from '../Press/Press';
import Books from '../Books/Books';
  


function Main(props) {
  return (
    <main className='main'>
     
<About />
<Books />
<Fun 
downloadsShown={props.downloadsShown}
downloadLength={props.downloadLength}
handleShowMore={props.handleShowMore}/>

<Press />


     
     </main>
        )
}




export default Main;
