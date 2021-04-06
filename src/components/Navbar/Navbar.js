import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scoped.css'

const Navbar = () => {
  return (
    <div>
      <Link to="/"><img src="https://www.realtor.com/realtor-com.png" width="50" height="50" /> </Link>
      <h1>Earthquake Zen Garden</h1>
      <Link to="/profile"><b>Welcome Sally</b></Link>
    </div>
  );
}

export default Navbar