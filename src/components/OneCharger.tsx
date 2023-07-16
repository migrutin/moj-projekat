
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneChargerProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneCharger=(oneCharger:OneChargerProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneCharger.id} className="bg-white">
    <img src={oneCharger.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneCharger.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneCharger.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneCharger)}></i> 
    </div>
  </div>
    )
}

export default OneCharger;