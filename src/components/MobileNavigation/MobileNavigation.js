import Navigation from '../Navigation/Navigation';

import React from 'react';
function MobileNavigation(props) {

    return (
        (
            <div className={`navigation__mobile navigation__mobile-${props.mobileOpen ? "null" : "hidden"}`}>
                <div className='navigation__mobile-container'>
                    <div className='navigation__mobile-header'>
                    
                        <button className="navigation__close-btn" onClick={props.onClose}></button>
                    </div>
                    <Navigation
                        onSigninClick={props.onSigninClick}
                        mobile={props.mobile}
                        Loggedin={props.Loggedin}
                        onSignOut={props.onSignOut}
                        
                    />

                </div>
            </div>
        )
    )
}

export default MobileNavigation;