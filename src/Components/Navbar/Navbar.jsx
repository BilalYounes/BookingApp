import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContiner">
            <span className="logo">YounBooking</span>
            <div className="navItems">
               <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar