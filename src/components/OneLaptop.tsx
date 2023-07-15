import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneLaptopProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneLaptop=(oneLaptop:OneLaptopProps)=>{

    const {increaseQuantity, getItemQuantity, decreaseQuantity, remove} = useShoppingCart()
    const numberOfItems:number = getItemQuantity(oneLaptop.id)
    
    return (
    <Link to='/laptops' className='link' key={oneLaptop.id}>
    <img src={oneLaptop.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{oneLaptop.name}</h1>
    <div className='flex bg-green-200 justify-between'>
      <p className='link-p'>{oneLaptop.price} RSD</p>
      
      <i className="fa fa-cart-shopping fa-2xl mt-5 mr-2"  onClick={() =>increaseQuantity(oneLaptop)}></i> 
    </div>
  </Link>
    )
}

export default OneLaptop;