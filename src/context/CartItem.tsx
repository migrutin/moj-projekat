import { useShoppingCart } from './ShoppingCartContext'


type CartItemProps = {
  id: number,
  imgUrl: string,
  name: string,
  price: number,
  quantity: number
}

export default function CartItem(item: CartItemProps) {
  const {increaseQuantity, getItemQuantity, decreaseQuantity, remove} = useShoppingCart()
    const numberOfItems:number = getItemQuantity(item.id)

  return (
    <div className=' flex justify-between mb-5'>
     
     <div className='flex'><div className='cart'>
        <img src={item.imgUrl} alt="" className='cart-img bg-white' />
      </div>

      <div className='shopping-cart-text'>
        <h1 className='cart-name'>{item.name} {item.quantity > 1 && <div className='text-gray-700 my-2'>x{item.quantity}</div>}</h1>
        <p className='cart-price'>RSD: {item.price}</p>
       
        <div className='link-i flex-col'>
          <div className='flex'>
          <button className='quantity-buttons' onClick={() =>decreaseQuantity(item.id)}> - </button>
          <div className='quantity'>{numberOfItems}</div>
          <button className='quantity-buttons'onClick={() =>increaseQuantity(item)} > + </button>
          </div>

          <div>
            <button className='remove-button' onClick={()=>remove(item.id)}>remove</button>
          </div>
        </div>

     
        
      </div>
      </div>
      
      <div className=''><button className='remove' onClick={() => remove(item.id)}>X </button></div>
      

      
      
      </div>
      



      
  
    
  )
}

