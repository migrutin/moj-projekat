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
    <div className=''>
      <div className='flex'>
      <div className='cart'>
        <img src={item.imgUrl} alt="" className='cart-img' />
      </div>

      <div className='shopping-cart-text'>
        <h1 className='cart-name'>{item.name} {item.quantity > 1 && <div className='text-gray-700 my-2'>x{item.quantity}</div>}</h1>
        <p className='cart-price'>RSD: {item.price}</p>
        
      </div>
      <div className=''><button className='remove' onClick={() => remove(item.id)}>X </button></div>
      
      </div>


      
    </div>
    
  )
}

