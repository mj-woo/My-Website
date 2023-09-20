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
        {/* <a href="/" className='nav__logo'>
          <h1 style={{color: 'black'}}>MJW</h1>
        </a> */}
        {/* <Link to="/" className='nav__logo' onClick={{handleReload}}>
          <h1 style={{color: 'black'}}>MJW</h1>
        </Link> */}
        <h1 className='nav__logo' style={{color: 'black'}}>MJW</h1>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><Link to={item.link} onClick={handleReload} style={{color:'black'}}>{item.title}</Link></li>)
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar