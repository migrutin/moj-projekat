
import { useShoppingCart } from '../context/ShoppingCartContext';

type OneOSProps ={
    id: number; 
    name: string;
    imgUrl: string;
    price: number;
}

const OneOS = (os : OneOSProps) => {
    const {increaseQuantity} = useShoppingCart()
 

  return (
    <div key={os.id}>
    <img src={os.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{os.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{os.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(os)}></i> 
    </div>
  </div>
  )
}

export default OneOS