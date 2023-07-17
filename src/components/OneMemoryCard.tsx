
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneMemoryCardProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneMemoryCard=(oneMemoryCard:OneMemoryCardProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneMemoryCard.id} className="bg-white">
    <img src={oneMemoryCard.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneMemoryCard.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneMemoryCard.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneMemoryCard)}></i> 
    </div>
  </div>
    )
}

export default OneMemoryCard;