
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneCableProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneCable=(oneCable:OneCableProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneCable.id} className="bg-white">
    <img src={oneCable.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneCable.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneCable.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneCable)}></i> 
    </div>
  </div>
    )
}

export default OneCable;