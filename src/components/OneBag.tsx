import { useShoppingCart } from '../context/ShoppingCartContext';

type OneBagProps ={
    id: number; 
    name: string;
    imgUrl: string;
    price: number;
}

const OneBag = (bag : OneBagProps) => {
    const {increaseQuantity} = useShoppingCart()
  
  return (
    <div key={bag.id}>
    <img src={bag.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{bag.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{bag.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(bag)}></i> 
    </div>
  </div>
  )
}

export default OneBag