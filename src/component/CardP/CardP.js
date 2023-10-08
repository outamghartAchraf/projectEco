import { Col,  Button ,Card} from "react-bootstrap"
import Bar from "../../HookCustom/FilterNumbr"
import  './CardP.css'
import { useShopingCard } from "../../context/Shopping"

const CardP = ({item}) => {
  const {getItemq,incressCars,decressCars,removeItem} = useShopingCard();
const quantity = getItemq(item.id);
  return (
<Col className="col-3 mx-6 d-flex my-3 sect-card">
  
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img}/>
      <Card.Body>
        <Card.Title>{item.name}  </Card.Title>
        <Card.Text>
          {Bar(item.price)}           
        </Card.Text>
        <div>
        {quantity === 0 ? <Button onClick={()=>incressCars(item.id)} class="btn btn-primary"><i className="fa-solid fa-cart-plus"></i></Button>:
        (<div>
          <div> 
            <Button onClick={()=>decressCars(item.id)}>-</Button>
            <span class="m-1">{quantity} in cart</span>
             
            <Button onClick={()=>incressCars(item.id)}>+</Button>
          </div>
          <Button onClick={()=>removeItem(item.id)} class="btn btn-primary mt-1">remove</Button>
          </div>)
      }
        </div>
      </Card.Body>
    </Card>
  
  </Col>
  
   )
}

export default CardP
