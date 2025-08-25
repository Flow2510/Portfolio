import './slide.scss';
import data from '../../data/slide.json'
import { Link } from 'react-router-dom';

export default function Slide({ source, alt, title, subtitle, span, activeIndex, setActiveIndex }) {

    return(
        <section className="slide">
            <img className='slide__background' src={source} alt={alt} />
            <div className='slide__background-filter' style={{ background: data[activeIndex].filterGradient }}></div>
            <div className="slide__content">
                <h1 className="slide__content-title">{title}</h1>
                <h2 className="slide__content-subtitle">{subtitle} <span>{span}</span></h2>
                <Link className='slide__content-link'>Mes projets</Link>
                <Link className='slide__content-link'>Me contacter</Link>
            </div>
            <div className='slide__dots'>
                {data.map((_, index) => (
                    <button key={index} className={`slide__dots-dot ${index === activeIndex ? "slide__dots-dot--active" : ""}`} onClick={() => setActiveIndex(index)}></button>
                ))}
            </div>
        </section>
    )
}