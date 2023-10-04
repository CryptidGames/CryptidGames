import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960)
        {
        setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <Link to={'/Home'} className='navbar-logo' onClick= {closeMobileMenu}>
                <img src="./images/Home.png" alt='' height='60' width="120"></img>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <img src={click ? "./images/MenuOpen.png" : "./images/MenuClosed.png"} alt='' height="60" width="60">
                </img>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to={'/About'} className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to={'/Games'} className='nav-links' onClick={closeMobileMenu}>
                        Games
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to={'/GamePlayVideo'} className='nav-links' onClick={closeMobileMenu}>
                        Videos
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to={'/ExampleCode'} className='nav-links' onClick={closeMobileMenu}>
                        Example Code
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to={'/RegisterUser'} className='nav-links-mobile' onClick={closeMobileMenu}>
                        Register User
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to={'/SignIn'} className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign In
                    </Link>
                </li>
            </ul>
            {button && <Button dest='/RegisterUser' buttonStyle='btn--outline'>Register User</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
