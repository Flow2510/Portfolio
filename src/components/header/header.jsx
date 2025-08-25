import { Link } from 'react-router-dom';
import './header.scss';
import { useState } from 'react';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const disableMenu = () => {
        setShowMenu(false);
    };

    return(
        <header className="header">
            <nav className="header__nav">
                <Link className="header__title" to="/">
                    Sendra Florian
                </Link>
                <div className={`header__menu ${showMenu ? "header__menu--active" : ""}`}>
                    <div className="header__menu-wrapper">
                        <Link className="header__link" to="/" onClick={disableMenu}>
                            Accueil
                        </Link>
                        <Link className="header__link" to="/about" onClick={disableMenu}>
                            À propos
                        </Link>
                        <Link className="header__link" to="/contact" onClick={disableMenu}>
                            Contact
                        </Link>
                        <div className="header__social">
                            <Link className="footer__social-link"><i className="fa-brands fa-github"></i></Link>
                            <Link className="footer__social-link"><i className="fa-brands fa-linkedin"></i></Link>
                            <Link className="footer__social-link"><i className="fa-solid fa-envelope"></i></Link>
                        </div>
                    </div>
                </div>
            </nav>
            <button className={`header__button ${showMenu ? "header__button--active" : ""}`} onClick={() => setShowMenu((prev) => !prev)}>
                <i className="fa-solid fa-bars"></i>
            </button>
        </header>
    )
}