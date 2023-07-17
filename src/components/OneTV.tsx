
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneTVProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneTV=(oneTV:OneTVProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneTV.id} className="bg-white">
    <img src={oneTV.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneTV.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneTV.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneTV)}></i> 
    </div>
  </div>
    )
}

export default OneTV;