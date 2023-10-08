import React from 'react'
import './Banar.css'
import image from '../../assets/images/watch.png'
import Slide from 'react-reveal/Slide';

const Banar = () => {
  return (
    <div className="banner">
    <Slide bottom> 
    <div className="inner-banner">
        <img src={image} alt=""/>
    </div>
    <div className="inner-banner">
        <h1>swatsh x10 </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quam corporis, nihil, numquam ipsa aut distinctio magnam quidem totam ipsam itaque blanditiis omnis repudiandae ea neque exercitationem vel natus molestiae.</p>
        <a href="/" id="shope-now">shop now</a>
    </div>
    </Slide>   
</div>
  )
}

export default Banar
