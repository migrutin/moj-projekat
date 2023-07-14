import { useShoppingCart } from './ShoppingCartContext'


type CartItemProps = {
  id: number,
  imgUrl: string,
  name: string,
  price: number,
  quantity: number
}

export default function CartItem(item: CartItemProps) {
  const { remove } = useShoppingCart()

  return (
    <div className='flex bg-gray-100 space-x-5 w-1/2'>
      <div className='flex'>
      <div className='cart'>
        <img src={item.imgUrl} alt="" className='w-56 h-56' />
      </div>

      <div className='shopping-cart-text'>
        <h1 className='cart-name'>{item.name} {item.quantity > 1 && <div className='text-gray-700 my-2'>x{item.quantity}</div>}</h1>
        <p className='cart-price'>RSD: {item.price}</p>
        <div></div>
      </div>
      <div><button className='remove' onClick={() => remove(item.id)}>X </button></div>
      
      </div>


      
    </div>
    
  )
}

