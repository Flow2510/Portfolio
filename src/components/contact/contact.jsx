import Form from "../form/form";
import './contact.scss';

export default function Contact(){
    return(
        <section className="contact" id="contact">
            <h2 className="contact__title">Contact</h2>
            <p className="contact__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus magni cupiditate fuga quia impedit harum? Ea mollitia delectus dolorem quae hic fugit, molestiae nesciunt, voluptatibus omnis modi corporis accusantium vel!</p>
            <Form />
        </section>
    )
}