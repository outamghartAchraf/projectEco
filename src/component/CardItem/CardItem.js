 import { Button } from "bootstrap"
import { Stack } from "react-bootstrap"
import { useShopingCard } from "../../context/Shopping"
import DateProduct from '../../Data/DateProduct'
import Bar from "../../HookCustom/FilterNumbr" 

const CardItem = ({id , quantity}) => {
    const {removeItem} = useShopingCard()
    const item = DateProduct.find((i) => i.id === id);
    if (item == null) return null;
    return (
      <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img
          src={item.imgUrl}
          alt="cart-img"
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {item.name}{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: "0.65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: "0.75rem" }}>
            {Bar(item.price)}
          </div>
        </div>
        <div>{Bar(item.price * quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeItem(item.id)}
        >
          &times;
        </Button>
      </Stack>
    );
}

export default CardItem
