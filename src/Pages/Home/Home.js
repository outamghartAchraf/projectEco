import React from 'react'
import './Home.css'
import { useState } from 'react';
import {  Hero,Product,Gallery,Service,Banar  } from '../../section/Index';
import DateProduct from '../../Data/DateProduct';
import Slide from 'react-reveal/Slide';

const Home = () => {
    const [DataP , setDataP] = useState(DateProduct)

    //Function by Filter Category
    
    
    const ForlopCategory = ['All' , ...new Set(DateProduct.map((i)=>i.category))]
     
    
    console.log(ForlopCategory)
    
    const CategoryByButton = (cat) =>{
    
      if(cat === 'All'){
    
        setDataP(DateProduct)
      }else{
    
        const NewArray = DateProduct.filter((item)=>item.category === cat)
        setDataP(NewArray)
    
      }
    
     
    }
    
    
    //Functon by Search
    
     
    const SearchPru = (word) =>{
    
      if(word !== ''){
      
        const NewArray = DateProduct.filter((item)=>item.name === word)
    
        setDataP(NewArray)
    
      }
    
    
    }

  return (
    <>
    <Slide right>
    <Hero/>
    </Slide>
    <Gallery/>
    <Service/>
    <Banar/>
    <Product DataP = {DataP}  ForlopCategory = {ForlopCategory} CategoryByButton = {CategoryByButton} SearchPru={SearchPru}/>

    </>
  )
}

export default Home
