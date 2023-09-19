import './header.css'
import HeaderImage from '../../assets/me.jpeg'
// import data from './data'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TypingEffect from "../../components/TypingEffect"
import { Link } from 'react-router-dom'

const Header = () => {
    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])

    const handleReload = () => {
        window.scrollTo(0,0);
    };

  return (
    <header id="header">
        <div className="container header__container">
            <div className='header__text'>
                <h3>Welcome! I am Minji Woo <span>.</span></h3>
                <TypingEffect/>
                <p>
                    I love crafting user-centric, charming, and human experiences through empathizing with users and fostering strong connections. <br/>
                    I redefine the roles of software engineers and product managers as the best friends of users who journey toward genuine, innovative solutions.
                </p>
                <div className="header__cta">
                    <Link to="/about" className="btn primary" onClick={handleReload}>About me</Link>
                    <a href='#footer' className='btn light'>Contact</a>
                    {/* <a href='/about' className='btn primary'>About me</a>
                    <a href='#footer' className='btn light'>Contact</a> */}
                </div>
            </div>
            <div className='profile__container'>
                <div className="header__profile" data-aos='fade-in'>
                    <img src={HeaderImage} alt='Header Profile' className='photo1'/>
                </div>
                <div className="header__profile2" data-aos='fade-in'>
                    <img src={HeaderImage} alt='Header Profile' className='photo2'/>
                </div>
            </div>
            {/* <div className="header__socials">
                {
                    data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
                }
            </div> */}
        </div>
    </header>
  )
}

export default Header