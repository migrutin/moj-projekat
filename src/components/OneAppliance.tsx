
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneApplianceProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneAppliance=(oneAppliance:OneApplianceProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneAppliance.id} className="bg-white">
    <img src={oneAppliance.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneAppliance.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneAppliance.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneAppliance)}></i> 
    </div>
  </div>
    )
}

export default OneAppliance;