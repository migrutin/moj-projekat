import { useShoppingCart } from "../context/ShoppingCartContext";

type OneEPProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneElectroProtection=(oneElectroprotection: OneEPProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    <div key={oneElectroprotection.id} className="bg-white">
    <img src={oneElectroprotection.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneElectroprotection.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneElectroprotection.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneElectroprotection)}></i> 
    </div>
  </div>
    )
}

export default OneElectroProtection;