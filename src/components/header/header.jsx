import { useState } from 'react';
import './header.scss';

export default function Header() {
const [showMenu, setShowMenu] = useState(false);

    return(
        <header className='header'>
            <a href="#"><h1 className='header__logo'><b>F</b></h1></a>
            <nav className='header__nav'>
                {showMenu && 
                    <ul className='header__list'>
                        <a href="#projets"><li className='header__list-li'>Projets</li></a>
                        <a href="#contact"><li className='header__list-li'>Contact</li></a>
                        <button className='header__button header__button-close' onClick={() => setShowMenu(false)}><i className="fa-solid fa-xmark"></i></button>
                    </ul>
                }
                {!showMenu &&
                    <button className='header__button header__button-open' onClick={() => setShowMenu(true)}><i className="fa-solid fa-bars"></i></button>
                }
            </nav>
        </header>
    )
}