import data from './data'
import './services.css'
import Card from '../../components/Card'

const Services = () => {
  return (
    <section id='services' className='skill__container'>
        <h2>Skills</h2>
        <div className="container services__container" data-aos='fade-up'>
            {
                data.map(item => (
                    <Card key={item.id} className="service light">
                        <div className="service__icon">{item.icon}</div>
                        <div className="service__details">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </Card>
                ))
            }
        </div>
    </section>
  )
}

export default Services