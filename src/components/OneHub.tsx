
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneHubProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneHub=(oneHub:OneHubProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneHub.id} className="bg-white">
    <img src={oneHub.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneHub.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneHub.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneHub)}></i> 
    </div>
  </div>
    )
}

export default OneHub;