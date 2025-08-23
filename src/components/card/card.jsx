import './card.scss';

export default function Card({ source, alt, title, text, category, github, page }){
    return(
        <article className='card'>
            <img className='card__image' src={source} alt={alt} />
            <div className='card__content'>
                <h1 className='card__content-title'>{title}</h1>
                <p className='card__content-description'>{text}</p>
                <p className='card__content-category'>{category}</p>
                <p><i className="fa-brands fa-github"></i> : <a className='card__content-git' href="#">{github}</a></p>
                <a className='card__content-page' href={page}>{page}</a>
            </div>
        </article>
    )
}