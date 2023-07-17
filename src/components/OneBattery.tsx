import { useShoppingCart } from "../context/ShoppingCartContext";

type OneBatteryProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneBattery=(oneBattery: OneBatteryProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    <div key={oneBattery.id} className="bg-white">
    <img src={oneBattery.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneBattery.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneBattery.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneBattery)}></i> 
    </div>
  </div>
    )
}

export default OneBattery;