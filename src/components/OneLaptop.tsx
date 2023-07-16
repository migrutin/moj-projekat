
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneLaptopProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneLaptop=(oneLaptop:OneLaptopProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneLaptop.id} className="bg-white">
    <img src={oneLaptop.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneLaptop.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneLaptop.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneLaptop)}></i> 
    </div>
  </div>
    )
}

export default OneLaptop;