import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../components';
import { useSoppingCart } from '../hooks/useSoppingCart';
import { products } from '../data/products';

import '../styles/custom-styles.css';


export const ShoppingPage = () => {

  const {shoppingCart, onProductCountChange} = useSoppingCart();
  

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
      
      {
        products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
            >
            <ProductImage className="custom-image" />
            <ProductTitle 
              className="text-white"
              title={product.title}
            />
            <ProductButtons className="custom-buttons"/>
          </ProductCard>
        ))
      }
      

      </div>

      <div className='shopping-cart'>

        {
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              product={product}
              className="bg-dark"
              style={{ width: '100px' }}
              value={product.count}
              onChange={onProductCountChange}
            >
              <ProductImage className="custom-image" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}
