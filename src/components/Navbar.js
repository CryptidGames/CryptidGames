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
            <Link to={"/CryptidGames" + '/Home'} className='navbar-logo' onClick= {closeMobileMenu}>
                <img src="./images/Ufovisualizerbuilds Screenshot 2023.04.06 - 11.08.12.59.png" alt='' height='60' width="100"></img>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <img src={click ? "./images/Ufovisualizerbuilds Screenshot 2023.02.08 - 10.05.04.52.png" : "./images/Ufovisualizerbuilds Screenshot 2023.02.08 - 10.05.47.02.png"} alt='' height="100" width="100">
                </img>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to={"/CryptidGames" + '/About'} className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to={"/CryptidGames" + '/Games'} className='nav-links' onClick={closeMobileMenu}>
                        Games
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to={"/CryptidGames" + '/GamePlayVideo'} className='nav-links' onClick={closeMobileMenu}>
                        Videos
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to={"/CryptidGames" + '/RegisterUser'} className='nav-links-mobile' onClick={closeMobileMenu}>
                        Register User
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to={"/CryptidGames" + '/SignIn'} className='nav-links-mobile' onClick={closeMobileMenu}>
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
