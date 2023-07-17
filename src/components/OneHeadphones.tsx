
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneHeadphonesProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneHeadphones=(oneHeadphones:OneHeadphonesProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneHeadphones.id} className="bg-white">
    <img src={oneHeadphones.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneHeadphones.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneHeadphones.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneHeadphones)}></i> 
    </div>
  </div>
    )
}

export default OneHeadphones;