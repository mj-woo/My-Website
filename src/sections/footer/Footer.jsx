import React from 'react'
import {socials} from './data'
import './footer.css'

export const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container footer__container">
        <div className='letscontact'>
          <h2>Let's Connect</h2>
          <br/>
          <p>Feel free to reach out for collaborations or just a friendly chat &#9786;</p>
        </div>
        <div className="footer__socials">
          {
            socials.map(social => <a key={social.id} href={social.link} target='_blank' rel='noopener noreferrer'>{social.icon}</a>)
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer
