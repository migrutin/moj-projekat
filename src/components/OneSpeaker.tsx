
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneSpeakerProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneSpeaker=(oneSpeaker:OneSpeakerProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneSpeaker.id} className="bg-white">
    <img src={oneSpeaker.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneSpeaker.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneSpeaker.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneSpeaker)}></i> 
    </div>
  </div>
    )
}

export default OneSpeaker;