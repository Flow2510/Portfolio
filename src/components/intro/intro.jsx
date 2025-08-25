import SkillBar from "../skillbar/skillbar"
import './intro.scss';

const skills = [
    {
        "title": "EXAMPLE",
        "background" : "100%"
    },
    {
        "title": "EXAMPLE",
        "background" : "80%"
    },
    {
        "title": "EXAMPLE",
        "background" : "60%"
    },
    {
        "title": "EXAMPLE",
        "background" : "40%"
    },
]

export default function Intro() {
    return(
        <section className="intro">
            <div className="intro__content">
                <h2 className="intro__content-title">Title</h2>
                <p className="intro__content-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, cum autem nobis alias dolor fuga veniam facere corrupti atque eveniet quia voluptas amet odit molestias officiis ab sequi laboriosam voluptate.</p>
            </div>
            <div className="intro__skills">
                {skills.map((skill, index) => (
                    <SkillBar 
                        key={index}
                        title={skill.title}
                        background={skill.background}
                    />
                ))}
            </div>
        </section>   
    )
}