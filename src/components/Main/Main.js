
 import React, { useState, useCallback } from 'react';
 import { Link } from 'react-router-dom';


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
{/* <div className="gridStuff">
          <section className="book-grid">
            <ul className="book-grid__list"></ul>
          </section>
        </div> */}

     
     </main>
        )
}




export default Main;
