import './form.scss';

export default function Form() {
    const handleClick = (e) => {
        e.preventDefault();
    }

    return(
            <form action="submit" className='form'>
                <label htmlFor="" className='form__label'>
                    <input className='form__label-input' type="text" name="" id="" placeholder='Nom'/>
                </label>
                <label htmlFor="" className='form__label'>
                    <input className='form__label-input form__label-input-email' type="email" name="" id="" placeholder='Email'/>
                </label>
                <textarea className='form__textarea' name="" id="" placeholder='Votre message'></textarea>
                <button className='form__button' onClick={handleClick} type="submit">Envoyer</button>
            </form>
    )
}