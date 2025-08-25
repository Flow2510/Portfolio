import './form.scss';

export default function Form() {
    return(
            <form action="">
                <label htmlFor="">
                    <input type="text" name="" id="" placeholder='Name'/>
                </label>
                <label htmlFor="">
                    <input type="email" name="" id="" placeholder='Email'/>
                </label>
                <textarea name="" id="" placeholder='Votre message'></textarea>
            </form>
    )
}