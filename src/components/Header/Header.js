import Navigation from '../Navigation/Navigation'
import MobileNavigation from '../MobileNavigation/MobileNavigation'
import React  from 'react';
function Header(props) {

  return (
 

    <header className='header'>
     <div className="header__title">Save A Fox Childrens Books</div>
     {props.isMobile ? <MobileNavigation isMobile={props.isMobile} mobileOpen={props.mobileNavOpen} onHamburgerClick={props.handleMobileClick}
   onClose={props.handleMobileClose}/> : <Navigation mobileOpen={props.mobileNavOpen} onHamburgerClick={props.handleMobileClick}
   handleMobileClose={props.handleMobileClose}/>}
     
               {props.isMobile && (
                    <button
                        className='header__hamburger' 
                        onClick={props.onHamburgerClick}
                    ></button>
                        )}
     </header>
        )
}

export default Header;



