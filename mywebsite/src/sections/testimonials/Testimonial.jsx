import Card from '../../components/Card'

const Testimonial = ({testimonial}) => {
  return (
    <Card className='white'>
        <p>{testimonial.quote}</p>
        <div className="testimonial__client">
            <div className="testimonial__client-details">
                <h6>{testimonial.name}</h6>
                <small>{testimonial.profession}</small>
            </div>
        </div>
    </Card>
  )
}

export default Testimonial