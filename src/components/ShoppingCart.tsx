import CartItem from "../context/CartItem"
import { useShoppingCart } from "../context/ShoppingCartContext"

function ShoppingCart() {
  const {cartItems} = useShoppingCart()
  return (
    <div>
        <header>
          
          {cartItems.map(item=>(
            <CartItem key={item.id} {...item}/>
          ))}
        </header>
    </div>
  )
}

export default ShoppingCart