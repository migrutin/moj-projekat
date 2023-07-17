
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneHomeAppProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneHomeApp=(oneHomeApp:OneHomeAppProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneHomeApp.id} className="bg-white">
    <img src={oneHomeApp.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneHomeApp.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneHomeApp.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneHomeApp)}></i> 
    </div>
  </div>
    )
}

export default OneHomeApp;