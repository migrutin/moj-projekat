import { useShoppingCart } from '../context/ShoppingCartContext';


interface OneDockerProps {
    id:number;
    name: string; 
    imgUrl: string; 
    price: number;
}

const OneDocker = (docker: OneDockerProps) => {

    const {increaseQuantity} = useShoppingCart()
    
  return (
    <div key={docker.id} className="bg-white">
    <img src={docker.imgUrl} alt="aaaa" className='laptop-item-img' />
    <h1 className='link-h'>{docker.name}</h1>
    <div className='flex justify-between'>
      <p className='link-p'>{docker.price} RSD</p>
      
        <i className="fa fa-shopping-cart fa-2xl  shopping-cart-icon" onClick={() =>increaseQuantity(docker)} aria-hidden="true"></i>


    </div>
  </div>
  )
}

export default OneDocker