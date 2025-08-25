import './skillbar.scss';

export default function SkillBar({title, background}) {
    return(
        <article className='skillbar'>
            <div className="skillbar__background" style={{ width: background }}></div>
            <h3 className='skillbar__title'>{title}</h3>
        </article>
    )
}