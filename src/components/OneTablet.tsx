
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneTabletProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneTablet=(oneTablet:OneTabletProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneTablet.id} className="bg-white">
    <img src={oneTablet.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneTablet.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneTablet.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneTablet)}></i> 
    </div>
  </div>
    )
}

export default OneTablet;