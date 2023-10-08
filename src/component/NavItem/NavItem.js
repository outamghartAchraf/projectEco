 import './NavItem.css'
 
 const NavItem = (props) => {
   return (
     <>
     <li class="nav-item">
     <a className="nav-link active item"  href="/">{props.children}</a>
    </li> 
     </>
   )
 }
 
 export default NavItem
 