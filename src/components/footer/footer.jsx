import { Link } from 'react-router-dom';
import './footer.scss';

export default function Footer() {
    return(
        <footer className="footer">
            <h2 className="footer__title">Sendra Florian</h2>
            <div className="footer__social">
                <Link className="footer__social-link"><i className="fa-brands fa-github"></i></Link>
                <Link className="footer__social-link"><i className="fa-brands fa-linkedin"></i></Link>
                <Link className="footer__social-link"><i className="fa-solid fa-envelope"></i></Link>
            </div>
        </footer>
    )
}