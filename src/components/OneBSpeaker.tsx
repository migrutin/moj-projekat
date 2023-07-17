
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneBSpeakersProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneBSpeaker=(oneBSpeaker:OneBSpeakersProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneBSpeaker.id} className="bg-white">
    <img src={oneBSpeaker.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneBSpeaker.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneBSpeaker.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneBSpeaker)}></i> 
    </div>
  </div>
    )
}

export default OneBSpeaker;