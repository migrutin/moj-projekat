import { useShoppingCart } from "../context/ShoppingCartContext";

type OneProjectorProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneProjector=(oneProjector: OneProjectorProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneProjector.id} className="bg-white">
    <img src={oneProjector.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneProjector.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneProjector.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneProjector)}></i> 
    </div>
  </div>
    )
}

export default OneProjector;