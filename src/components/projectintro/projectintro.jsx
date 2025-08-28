import { Link } from 'react-router-dom';
import './projectintro.scss';
import background from '../../../public/images/colin-watts-l5oWg7ezXgs-unsplash.jpg'

export default function ProjectIntro({title}) {
    return(
        <section className='projectintro'>
            <img className='projectintro__background' src={background} alt="" />
            <div className='projectintro__background-filter'></div>
            <div className='projectintro__content'>
                <Link to="/" className='projectintro__content-link'><i className="fa-solid fa-house"></i> Retour a l'accueil</Link>
                <h1 className='projectintro__content-title'>{title}</h1>
            </div>
        </section>
    )
}