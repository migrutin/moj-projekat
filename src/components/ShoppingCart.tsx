import React from 'react';
import CartItem from '../context/CartItem';
import CartTotal from '../context/CartTotal';
import { useShoppingCart } from '../context/ShoppingCartContext';
import EmptyBasket from './EmptyBasket';

const ShoppingCart = () => {
  const { cartItems } = useShoppingCart();
  console.log(cartItems);

  return (
    <div className="shopping-cart flex">
   
      {cartItems.length === 0 ? (
        <EmptyBasket />
      ) : (
        <>
        
          <header>
            {cartItems.map((item) => (
              <CartItem
                id={item.id}
                imgUrl={item.imgUrl}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                key={item.id}
              />
            ))}
          </header>
          <CartTotal cartItems={cartItems} />
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
