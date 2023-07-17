
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneWatchProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneWatch=(oneWatch:OneWatchProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneWatch.id} className="bg-white">
    <img src={oneWatch.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneWatch.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneWatch.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneWatch)}></i> 
    </div>
  </div>
    )
}

export default OneWatch;