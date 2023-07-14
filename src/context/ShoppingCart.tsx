import CartItem from './CartItem'
import { CartTotal } from './CartTotal'
import { useShoppingCart } from './ShoppingCartContext'

export default function ShoppingCart() {
  const { cartItems } = useShoppingCart()

  return (
    <div>
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          id={item.id}
          imgUrl={item.imgUrl}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}

      
  <CartTotal cartItems={cartItems} />
      
    </div>
  )
}
