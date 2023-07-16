
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneBrandNameProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneBrandName=(oneBrandName:OneBrandNameProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneBrandName.id} className="bg-white">
    <img src={oneBrandName.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneBrandName.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneBrandName.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneBrandName)}></i> 
    </div>
  </div>
    )
}

export default OneBrandName;