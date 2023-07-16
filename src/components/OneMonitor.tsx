
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneMonitorProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneMonitor=(oneMonitor:OneMonitorProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneMonitor.id} className="bg-white">
    <img src={oneMonitor.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneMonitor.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneMonitor.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneMonitor)}></i> 
    </div>
  </div>
    )
}

export default OneMonitor;