
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneCoolerProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneCooler=(oneCooler:OneCoolerProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneCooler.id}>
    <img src={oneCooler.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneCooler.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneCooler.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneCooler)}></i> 
    </div>
  </div>
    )
}

export default OneCooler;