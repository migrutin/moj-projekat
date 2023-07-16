
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneComponentProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneComponent=(oneComponent:OneComponentProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={oneComponent.id} className="bg-white">
    <img src={oneComponent.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneComponent.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneComponent.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneComponent)}></i> 
    </div>
  </div>
    )
}

export default OneComponent;