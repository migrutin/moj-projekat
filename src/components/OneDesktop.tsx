
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneDesktopProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneDesktop=(oneDesktop:OneDesktopProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneDesktop.id} className="bg-white">
    <img src={oneDesktop.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneDesktop.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneDesktop.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneDesktop)}></i> 
    </div>
  </div>
    )
}

export default OneDesktop;