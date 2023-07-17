import { useShoppingCart } from "../context/ShoppingCartContext";

type OneAVProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneAudioVideo=(oneAudioVideo: OneAVProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneAudioVideo.id} className="bg-white">
    <img src={oneAudioVideo.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneAudioVideo.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneAudioVideo.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneAudioVideo)}></i> 
    </div>
  </div>
    )
}

export default OneAudioVideo;