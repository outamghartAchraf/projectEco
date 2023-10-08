import { createContext, useContext, useState } from "react";
import ShoppingCard from "../component/ShoppingCard/ShoppingCard";


const ShoppingContext = createContext({});

 
const ShoppingProvider = ({children}) => {
    const [isOpen , setIsopen ] = useState(false);
    const [cartItems ,  setCartItems] = useState([]);
    
    const openCard = () =>{
      setIsopen(true)
    }

    const closeCard = () =>{
      setIsopen(false)
    }

    const cartQuantity = cartItems.reduce(
      (quantity, item) => item.quantity + quantity,
      0
    );
 
    
    const getItemq = (id)=>{
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }

    const incressCars = (id)=>{
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
              return [...currItems, { id, quantity: 1 }];
            } else {
              return currItems.map((item) => {
                if (item.id === id) {
                  return { ...item, quantity: item.quantity + 1 };
                } else {
                  return item;
                }
              });
            }
          });
    }


   //decriment item
    const decressCars = (id)=>{
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
              return currItems.filter((item) => item.id !== id);
            } else {
              return currItems.map((item) => {
                if (item.id === id) {
                  return { ...item, quantity: item.quantity - 1 };
                } else {
                  return item;
                }
              });
            }
          });
    }

    //Remove
    const removeItem = (id)=>{
        setCartItems((currItems) => currItems.filter((item) => item.id !== id));
    }
    
  return (
    <ShoppingContext.Provider value={{cartItems  , incressCars, decressCars,removeItem,getItemq,openCard,closeCard, cartQuantity }}>
      {children}
      <ShoppingCard isOpen={isOpen}/>
    </ShoppingContext.Provider>
  )
}

export default ShoppingProvider 

export const useShopingCard = ()=>{
    return useContext(ShoppingContext)
}