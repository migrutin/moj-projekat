import { Link } from 'react-router-dom'

type Item = {
  id: number,
  name: string,
  imgUrl: string,
  price: number,
}

type CartItem = Item & { quantity: number }

type CartSummaryProps = {
  cartItems: CartItem[]
}

 const CartTotal = ({ cartItems }: CartSummaryProps) =>{
  const totalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)
  console.log(totalPrice)

  return (
    <div className='div-total'>
      <div className='flex flex-col'>
        <h1 className='h'>Iznos kupovine je: </h1>
        <div className='total'>RSD: {totalPrice}</div>
        <div className='cart-link'>
        <Link to='/registracija' className='underline'>Napravite novi nalog ili se ulogujte</Link>
      </div>
      <button className='cart-button'>Nastavite</button>
      </div>
     
    </div>
  )
}

export default CartTotal
