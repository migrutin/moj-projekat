
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneMikeProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneMike=(oneMike:OneMikeProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneMike.id} className="bg-white">
    <img src={oneMike.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneMike.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneMike.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneMike)}></i> 
    </div>
  </div>
    )
}

export default OneMike;