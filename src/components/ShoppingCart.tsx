import CartItem from "../context/CartItem"
import { useShoppingCart } from "../context/ShoppingCartContext"

function ShoppingCart() {
  const {cartItems} = useShoppingCart()
  console.log(cartItems);
  return (
    <div>
        <header>
          {cartItems.map(item=>(
            <CartItem 
            id={item.id}
            imgUrl={item.imgUrl} 
            name={item.name} 
            price={item.price} 
            quantity={item.quantity} 
            key={item.id}/>
          ))}
        </header>
    </div>
  )
}

export default ShoppingCart