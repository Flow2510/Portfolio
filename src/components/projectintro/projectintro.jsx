import { Link } from 'react-router-dom';
import './projectintro.scss';

export default function ProjectIntro({title}) {
    return(
        <section className='projectintro'>
            <Link to="/"><i className="fa-solid fa-house"></i> Retour a l'accueil</Link>
            <h1 className='projectintro__title'>{title}</h1>
        </section>
    )
}