import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useSoppingCart = () => {
  
  const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({});

  const onProductCountChange = ({count, product}: {count: number, product: Product}) => {

    setShoppingCart(oldShoppingCart => {

      if (!count) {
        const {[product.id]: toDelete, ...rest} = oldShoppingCart;
        return {...rest};
      } 

      return { 
        ...oldShoppingCart,
        [product.id]: {...product, count}
      }

    });

  }

  return {
    shoppingCart, 
    onProductCountChange
  };


}
