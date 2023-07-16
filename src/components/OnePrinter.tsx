
import { useShoppingCart } from "../context/ShoppingCartContext";

type OnePrinterProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OnePrinter=(onePrinter:OnePrinterProps)=>{

    const {increaseQuantity } = useShoppingCart()
     
    return (
    < div key={onePrinter.id} className="bg-white">
    <img src={onePrinter.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{onePrinter.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{onePrinter.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl shopping-cart-icon"  onClick={() =>increaseQuantity(onePrinter)}></i> 
    </div>
  </div>
    )
}

export default OnePrinter;