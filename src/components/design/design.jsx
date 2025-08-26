import './design.scss';

export default function Design({imageDesktop, imageMobile}) {
    return(
        <section className='design'>
            <article className='design__desktop'>
                <h2 className='design__desktop-title'>Website Design</h2>
                <div className='design__desktop-container'>
                    <img src={imageDesktop} alt="design of the project on desktop" className='design__desktop-image'/>
                </div>
            </article>
            <article className='design__mobile'>
                <h2 className='design__mobile-title'>Mobile Design</h2>
                <div className='design__mobile-container'>   
                    <img src={imageMobile} alt="design of the project on mobile" className='design__mobile-image'/>
                </div>
            </article>
        </section>
    )
}