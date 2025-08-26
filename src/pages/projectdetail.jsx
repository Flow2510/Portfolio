import { useParams } from "react-router-dom";
import projects from '../data/projects.json';
import ProjectIntro from "../components/projectintro/projectintro";
import Description from "../components/description/description";
import Design from "../components/design/design";
import Process from "../components/process/process";

export default function ProjectDetail(){
    const {id} = useParams();
    const project = projects.find(p => p.id === id);

    return(
        <main>
            <ProjectIntro 
                title={project.title}
            />
            <Description 
                titleDescription={project.titleDescription}
                description={project.description}
            />
            <Design 
                imageDesktop={project.imageDesktop}
                imageMobile={project.imageMobile}
            />
            <Process />
        </main>
    )
}