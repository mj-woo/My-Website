import './about.css'
import AboutImage from '../../assets/jejume.jpeg'
import AboutImage2 from '../../assets/dance.jpeg'
import resume from '../../assets/Minji Woo Resume.pdf'
import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'
import FAQ from '../faq/FAQs'

const About = () => {
  return (
    <section id='about' data-aos='fade-in'>
      <h2 className='title'>About Me</h2>
      {/* <div>
        <img src={UnderlineImage} alt="underline" className='underline'/>
      </div> */}
      <div className='container about__container'>
        <div className='about__left'>
          <div>
            <img src={AboutImage} alt="About" className='about__portrait'/>
            <img src={AboutImage2} alt="About" className='about__portrait2'/>
          </div>
        </div>
        <div className='about__right'>
          <p className='firstintro'>Hi, I am Minji Woo, a Freeman Scholar Class of 2026 at Wesleyan University studying Economics and Computer Science with Applied Data Science Certificate.</p>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
          My most recent work centered on nurturing young, rapidly growing startups where my role extended beyond typical boundaries. I enjoyed overseeing products
          from inception to completion, strategically envisioning their growth and impact on the business while actively driving hands-on product development. 
          Collaborating with designers, software engineers, and the CEO provided valuable insights into the 
          delicate balance between business objectives and engineering contraints, all while championing user-centric solutions.
          <br/><br/>
          I was an environmentalist and a political scientist until 2021; I have been a programmer since 2022, learning hard skills, such as <em>how</em> to run analysis and build products. I am now an <em>analyst</em> – in my definition, it is not only a data analyst or a software engineer but a <em>critical thinker</em> and <em>communicator</em>.
          I am the analyst that solves problems, approaching every question with <span className='highlighted'><em>what</em> and <em>why</em> before thinking <em>how</em></span>. <br/><br/>
          Transitioning from an aspiring diplomat who dreamed of solving conflicts between environmental and economic interests by negotiating different stakeholders’ stances
          to the analyst seemed like paving a completely new way. But now I realize that the negotiation and problem-solving skills I learned as a youth environmentalist were applicable everywhere as either a software engineer, a product manager, a data analyst, or a consultant.
          <br/><br/>I see no border between industries and my ultimate mission is to identify opportunities for improvement and create better experiences for all. In my journey towards the mission, I thrive on adventures that enrich my sensation and expand my horizon. 
          And I am passionate about exploring interdisciplinary intersections and approaching user and product observation from those perspectives in a liberal arts educational environment. 
          </p>
          <a href={resume} download className='btn primary'>Download Resume <HiDownload/></a>
        </div>
      </div>
      <FAQ/> 
    </section>
  )
}

export default About