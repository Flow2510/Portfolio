import ProjectCard from '../projectcard/projectcard';
import './projects.scss';
import projects from '../../data/projects.json'

export default function Projects() {
    return(
        <section className='projects' id='projects'>
            <h2 className='projects__title'>Projets</h2>
            {projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    source={project.image}
                    alt={project.alt}
                    title={project.title}
                    subtitle={project.category}
                />
            ))}
        </section>
    )
}