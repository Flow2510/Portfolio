import ProjectCard from '../projectcard/projectcard';
import './projects.scss';
import projects from '../../data/projects.json'
import { Link } from 'react-router-dom';


export default function Projects() {

    return(
        <section className='projects' id='projects'>
            <h2 className='projects__title'>Projets</h2>
            {projects.map((project) => (
                <Link key={project.id} to={`/projects/${project.id}`}>
                    <ProjectCard 
                        source={project.image}
                        alt={project.alt}
                        title={project.title}
                        subtitle={project.category}
                    />
                </Link>
            ))}
        </section>
    )
}