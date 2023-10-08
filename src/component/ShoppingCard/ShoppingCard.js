import './ShoppingCard.css'
import { Offcanvas,Stack } from "react-bootstrap";
import { useShopingCard } from '../../context/Shopping'
import CardItem from '../CardItem/CardItem'
import Bar from '../../HookCustom/FilterNumbr';
import DateProduct from '../../Data/DateProduct'


const ShoppingCard = ({isOpen})=>{
 const {cartItems,closeCard} = useShopingCard()
 return (
 <Offcanvas show={isOpen} onHide={closeCard} placement="end">
 <Offcanvas.Header closeButton>
   <Offcanvas.Title>Cart</Offcanvas.Title>
 </Offcanvas.Header>
 <Offcanvas.Body>
   <Stack gap={3}>
     {cartItems.map((item) => (
       <CardItem key={item.id} {...item} />
     ))}
     <div className="ms-auto fw-bold fs-5">
       Total{" "}
       {Bar(
        cartItems.reduce((total, cartItem) => {
           const item = DateProduct.find((i) => i.id === CardItem.id);
           return total + (item?.price || 0) * cartItem.quantity;
         }, 0)
       )}
     </div>
   </Stack>
 </Offcanvas.Body>
</Offcanvas>
);


}

 export default ShoppingCard 