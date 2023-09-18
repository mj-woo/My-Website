import faqs from './data'
import FAQ from './FAQ'
import './faqs.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import ArrowImage from '../../assets/arrow.png'


const FAQs = () => {
    useEffect(()=>{
        AOS.init({duration: 2000})
    })

    return (
        <section id='faqs' className='sectionfaq'>
            <div className='arrow-container'>
                <img src={ArrowImage} alt="Arrow" className='arrow'/>
            </div>
            <h2 className='titlefaq'>
                My Working Philosophy
            </h2>
            <div className="container faqs__container" data-aos='fade-in'>
                {
                    faqs.map(faq => (
                        <FAQ key={faq.id} faq={faq} />
                    ))
                }
            </div>
        </section>
    )
}

export default FAQs