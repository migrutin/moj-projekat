
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneAllInProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneAllIn=(oneAllIn:OneAllInProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneAllIn.id} className="bg-white">
    <img src={oneAllIn.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneAllIn.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneAllIn.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneAllIn)}></i> 
    </div>
  </div>
    )
}

export default OneAllIn;