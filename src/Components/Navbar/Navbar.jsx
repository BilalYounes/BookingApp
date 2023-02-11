import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContiner">
          <Link to={"/"}>
            <span className="logo">YounBooking</span>
            </Link>
            <div className="navItems">
               <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar