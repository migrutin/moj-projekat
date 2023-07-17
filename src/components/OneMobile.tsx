
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneMobileProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneMobile=(oneMobile:OneMobileProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneMobile.id} className="bg-white">
    <img src={oneMobile.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneMobile.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneMobile.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneMobile)}></i> 
    </div>
  </div>
    )
}

export default OneMobile;