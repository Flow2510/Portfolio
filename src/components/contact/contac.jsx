import './contact.scss'

export default function Contact(){
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <section className='contact'>
            <h2 className='contact__title'>Contact</h2>
            <form className='contact__form' action="" >
                <label htmlFor="">
                    <p>Nom:</p>
                    <input type="text"/>
                </label>
                <label htmlFor="">
                    <p>Email:</p>
                    <input type="email"/>
                </label>
                <label htmlFor="">
                    <p>Message:</p>
                    <textarea></textarea>
                </label>
                <button type="submit" onClick={handleSubmit}>Envoyer</button>
            </form>
        </section>
    )
}