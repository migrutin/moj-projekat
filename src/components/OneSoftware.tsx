
import { useShoppingCart } from '../context/ShoppingCartContext';

type OneSoftProps ={
    id: number; 
    name: string;
    imgUrl: string;
    price: number;
}

const OneSoftware = (soft : OneSoftProps) => {
    const {increaseQuantity} = useShoppingCart()
 

  return (
    <div key={soft.id}>
    <img src={soft.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{soft.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{soft.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(soft)}></i> 
    </div>
  </div>
  )
}

export default OneSoftware