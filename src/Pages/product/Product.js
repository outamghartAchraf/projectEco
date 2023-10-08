import React from 'react'
import './Product.css'
import { useState } from 'react';
import {  Product  } from '../../section/Index';
import DateProduct from '../../Data/DateProduct';
import Slide from 'react-reveal/Slide';

const ProductShop = () => {
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
    <Slide left>
      <Product DataP = {DataP}  ForlopCategory = {ForlopCategory} CategoryByButton = {CategoryByButton} SearchPru={SearchPru}/>
      </Slide>
    </>
  )
}

export default ProductShop
