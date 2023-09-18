import './testimonials.css'
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination, Autoplay} from 'swiper/modules'
import data from './data'
import Testimonial from './Testimonial'
import 'swiper/css/autoplay'

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>What my clients say</h2>
      <p>These are from my clients</p>
      <div className="container">
      <Swiper 
        slidesPerVies={1} 
        spaceBetween={30} 
        breakpoints={{
          601: {slidesPerView: 2}, 
          1025: {slidesPerView: 3}
        }}
        pagination={{clickable:true,}} 
        modules={[Pagination, Autoplay]} 
        autoplay={true}
        className='mySwiper'
      >
        {
          data.map(item => (
            <SwiperSlide key={item.id}>
              <Testimonial testimonial={item}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </section>
  )
}

export default testimonials