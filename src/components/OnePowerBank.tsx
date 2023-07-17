
import { useShoppingCart } from "../context/ShoppingCartContext";

type OnePowerBankProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OnePowerBank=(onePowerBank:OnePowerBankProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={onePowerBank.id} className="bg-white">
    <img src={onePowerBank.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{onePowerBank.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{onePowerBank.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(onePowerBank)}></i> 
    </div>
  </div>
    )
}

export default OnePowerBank;