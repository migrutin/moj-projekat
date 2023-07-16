
import { useShoppingCart } from '../context/ShoppingCartContext';

type OneMouseProps ={
    id: number; 
    name: string;
    imgUrl: string;
    price: number;
}

const OneMouse = (mouse : OneMouseProps) => {
    const {increaseQuantity} = useShoppingCart()
 

  return (
    <div key={mouse.id} className="bg-white">
    <img src={mouse.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{mouse.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{mouse.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(mouse)}></i> 
    </div>
  </div>
  )
}

export default OneMouse