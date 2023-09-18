import './navbar.css'
import data from './data'
import { Link } from 'react-router-dom'

const Navbar = ({closeModal}) => {

  const handleReload = () => {
    window.scrollTo(0,0);
    if(closeModal) {
      closeModal();
    }
  };

  return (
    <nav>
      <div className='container nav__container'>
        {/* <a href="/" className='nav__logo' onClick={handleReload}>
          <h1>MJW</h1>
        </a> */}
        <h1><Link to={'/'} className='nav__logo' onClick={handleReload}>MJW</Link></h1>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><Link to={item.link} onClick={handleReload}>{item.title}</Link></li>)
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar