import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

type OneLaptopProps={
    id:number;
    name:string;
    imgUrl:string;
    price:number;
}


const OneLaptop=(jedanLaptop:OneLaptopProps)=>{

    const {increaseQuantity, getItemQuantity, decreaseQuantity, remove} = useShoppingCart()
    const numberOfItems:number = getItemQuantity(jedanLaptop.id)
    
    return (
    <Link to='/laptops' className='link' key={jedanLaptop.id}>
    <img src={jedanLaptop.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{jedanLaptop.name}</h1>
    <div className='flex'>
      <p className='link-p'>{jedanLaptop.price} RSD</p>
      {(numberOfItems) === 0 ? (
        <i className="fa fa-shopping-cart fa-2xl link-i" onClick={() =>increaseQuantity(jedanLaptop)} aria-hidden="true"></i>
      ) : (
        <div className='link-i flex-col'>
          <div className='flex'>
          <button className='quantity-buttons' onClick={() =>decreaseQuantity(jedanLaptop.id)}> - </button>
          <div className='quantity'>{numberOfItems}</div>
          <button className='quantity-buttons'onClick={() =>increaseQuantity(jedanLaptop)} > + </button>
          </div>

          <div>
            <button className='remove-button' onClick={()=>remove(jedanLaptop.id)}>remove</button>
          </div>
        </div>

      )}


    </div>
  </Link>
    )
}

export default OneLaptop;