
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneKitchenAppProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneKitchenApp=(oneKitchenApp:OneKitchenAppProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneKitchenApp.id} className="bg-white">
    <img src={oneKitchenApp.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneKitchenApp.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneKitchenApp.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneKitchenApp)}></i> 
    </div>
  </div>
    )
}

export default OneKitchenApp;