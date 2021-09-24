import React from 'react';

import { Link } from 'react-scroll'

function Navigation(props) {

  return (
<div className="menu">
             
                 
        <ul className="header__menuList">
         
          <div className='header__navItem-text'><div className='header__navItem'>
            <Link activeClass="header__navItem-active" to="about" spy={true} smooth={true}>Home</Link>
                 </div>     </div>    

                            <div className='header__navItem-text'><div className='header__navItem'>
            <Link activeClass="header__navItem-active" to="books" spy={true} smooth={true}>Books</Link></div>  </div>
             <div className='header__navItem-text'><div className='header__navItem'>
            <Link activeClass="header__navItem-active" to="fun" spy={true} smooth={true}>Fun</Link>
            </div>     </div>      
            
            

            <div className='header__navItem-text'><div className='header__navItem'>
            <Link activeClass="header__navItem-active" to="press" spy={true} smooth={true}>Press</Link>      
            </div>   
              </div>  



        </ul>
      </div>
  )
}

export default Navigation;

