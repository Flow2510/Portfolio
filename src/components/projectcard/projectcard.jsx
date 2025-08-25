import './projectcard.scss';

export default function ProjectCard({ source, alt, title, subtitle }) {
    return(
        <article className='project'>
            <img className='project__image' src={source} alt={alt} />
            <div className='project__content'>
                <h4 className='project__content-title'>{title}</h4>
                <p className='project__content-subtitle'>{subtitle}</p>
            </div>
        </article>
    )
}