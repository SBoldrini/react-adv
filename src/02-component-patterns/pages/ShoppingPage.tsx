import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../components';

import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[0];


export const ShoppingPage = () => {  

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      
      <ProductCard 
        key={product.id}
        product={product}
        className="bg-dark"
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({reset, count, increaseBy, isMaxCountReached}) => ( 
            <>
              <ProductImage className="custom-image" />
              <ProductTitle 
                className="text-white"
                title={product.title}
              />
              <ProductButtons className="custom-buttons"/>

              <button onClick={reset}>Reset</button>{' '}
              <button onClick={() => increaseBy(-2)}>-2</button>{' '}
              {
                (!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>)
              }{' '}
              <span>{count}</span>
            </>
          )
        }
      </ProductCard>      

    </div>
  )
}
