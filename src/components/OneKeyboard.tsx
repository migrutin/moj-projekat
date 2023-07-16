import { useShoppingCart } from '../context/ShoppingCartContext';


interface OneKeyboardProps {
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}

const OneKeyboard = (keyboard: OneKeyboardProps) => {

    const {increaseQuantity} = useShoppingCart()
    
  return (
    <div key={keyboard.id} className="bg-white">
    <img src={keyboard.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{keyboard.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{keyboard.price} RSD</p>
      
        <i className="fa fa-shopping-cart fa-2xl  shopping-cart-icon" onClick={() =>increaseQuantity(keyboard)} aria-hidden="true"></i>


    </div>
  </div>
  )
}

export default OneKeyboard