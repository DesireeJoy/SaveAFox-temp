
  import { HashLink as Link } from 'react-router-hash-link';


function Navigation(props) {
  return (
    <div className="menu">
        <ul className="header__menuList">
         
          <div className='header__navItem-text'><a className='header__navItem' href='/#main'>
         Home
            </a></div>
      
          <div className='header__navItem-text'><a className='header__navItem' href='/#fun'>
        Fun
            </a></div>

          <div className='header__navItem-text'><a className='header__navItem' href='/#books'>
    Books
            </a></div>

          <div className='header__navItem-text'><a className='header__navItem' href='/#press'>
         Press
            </a></div>

        </ul>
      </div>
/* <div className="menu">
        <ul className="header__menuList">
         
          <div className='header__navItem-text'><a className='header__navItem' to='/#main">
         Home
            </Link></div>
      
          <div className='header__navItem-text'><a className='header__navItem' to='/#fun">
        Fun
            </Link></div>

          <div className='header__navItem-text'><a className='header__navItem' to='/#books">
    Books
            </Link></div>

          <div className='header__navItem-text'><a className='header__navItem' to='/#press">
         Press
            </Link></div>

        </ul>
      </div> */
  )
}

export default Navigation;

