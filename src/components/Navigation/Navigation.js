  import { Link } from 'react-router-dom';


function Navigation(props) {
  return (
<div className="menu">
        <ul className="header__menuList">
          <Link className="header__navItem" to="/">Home</Link>
          <Link className="header__navItem" to="/fun">Fun</Link>
          <Link className="header__navItem" to="/about">About</Link>
          <Link className="header__navItem" to="/press">Press</Link>
           
        </ul>
      </div>
  )
}

export default Navigation;

