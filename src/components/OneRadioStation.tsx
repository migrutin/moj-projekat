import { useShoppingCart } from "../context/ShoppingCartContext";

type OneRSProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneRadioStation=(oneRadioStation: OneRSProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    <div key={oneRadioStation.id} className="bg-white">
    <img src={oneRadioStation.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneRadioStation.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{oneRadioStation.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(oneRadioStation)}></i> 
    </div>
  </div>
    )
}

export default OneRadioStation;