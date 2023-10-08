import logo from '../../assets/images/logo.png'
import { NavItem } from '../../component/Index'
import { useShopingCard } from '../../context/Shopping'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
const Navbar = () => {
    const {openCard,cartQuantit} = useShopingCard()
  return (
        <>
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm fixed-top "  >
  <div className="container ">
    <a className="navbar-brand" href="/"   ><img src={logo} className="logo" alt='logo'  /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mx-auto">
       <NavItem> <Link className='btnitem' to='/'>Home</Link></NavItem> 
       <NavItem> <Link className='btnitem' to='/product'>Product</Link></NavItem> 
       <NavItem> <Link className='btnitem' to='/service'>Service</Link></NavItem> 
        <NavItem>About</NavItem>
      
      </ul>
      <div className='buttons'>
     
        <Link to='/login' className='btn btn-outline-dark'>
      <i className="fa-solid fa-right-to-bracket me-1"></i>
      Login</Link>
      
      <button className='btn btn-outline-dark ms-2' onClick={ openCard }>
      <i className="fa-solid fa-cart-shopping me-1"></i>
      Card ({cartQuantit})</button>

     
      
      </div>
    </div>
  </div>
</nav>
        
        </>
  )
}

export default Navbar
 