import { useShoppingCart } from '../context/ShoppingCartContext';

type OneBaseProps ={
    id: number; 
    name: string;
    imgUrl: string;
    price: number;
}

const OneBase = (base : OneBaseProps) => {
    const {increaseQuantity} = useShoppingCart()
  
  return (
    <div key={base.id} className="bg-white">
    <img src={base.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{base.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{base.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(base)}></i> 
    </div>
  </div>
  )
}

export default OneBase