import './Hero.css'
 import Typical from 'react-typical'


const Hero = () => {
  return (
    <div className='Hero'>

    <div className='container'>
    <h1 className='title'>
    <Typical
    steps={['Hello', 1000, 'Hello Web Site Ecomerce',1000]}
    loop={Infinity}
    wrapper="p"
  />
    
    </h1>
    <button className='btn btn-primary shop'>Shop</button>
    
     </div>
    
 
    </div>
  )
}

export default Hero
