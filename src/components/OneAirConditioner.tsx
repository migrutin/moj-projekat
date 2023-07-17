
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneAirConditionerProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneAirConditioner=(oneAirConditioner:OneAirConditionerProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneAirConditioner.id} className="bg-white">
    <img src={oneAirConditioner.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneAirConditioner.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneAirConditioner.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneAirConditioner)}></i> 
    </div>
  </div>
    )
}

export default OneAirConditioner;