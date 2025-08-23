import './gallery.scss';
import projets from '../../data/projets.json'
import Card from '../card/card';

export default function Gallery(){
    return(
        <section className='gallery' id='projets'>
            {projets.map((projet) => (
                <Card 
                    key={projet.title}
                    source={projet.image}
                    alt={projet.alt}
                    title={projet.title}
                    text={projet.text}
                    category={projet.category}
                    github={projet.github}
                    page={projet.page}
                />
            ))}
        </section>
    )
}