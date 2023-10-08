import React from 'react'
import {   LoginIn  } from '../../section/Index';
import './LoginP.css'
import Slide from 'react-reveal/Slide';

const LoginP = () => {
  return (
    <div className="login1">
    <Slide left> 
        <LoginIn/>
    </Slide>    
    </div>
  )
}

export default LoginP
