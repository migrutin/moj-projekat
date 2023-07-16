
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneGame={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneGame=(oneGame:OneGame)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneGame.id} className="bg-white">
    <img src={oneGame.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneGame.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneGame.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneGame)}></i> 
    </div>
  </div>
    )
}

export default OneGame;