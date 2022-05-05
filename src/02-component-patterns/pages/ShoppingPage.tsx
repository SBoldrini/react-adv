import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
      
      {/* Nombre componente Padre punto nombre del componente hijo */}
      <ProductCard 
        product={product}
        className="bg-dark"
      >
        <ProductCard.Image className="custom-image" />
        <ProductCard.Title title={'Coffee'}/>
        <ProductCard.Buttons />
      </ProductCard>
      
      {/* Nombre componente Padre y componentes hijos */}
      <ProductCard 
        product={product}
        className="bg-dark"
        >
        <ProductImage className="custom-image" />
        <ProductTitle 
          className="text-white"
          title={product.title}
        />
        <ProductButtons className="custom-buttons"/>
      </ProductCard>
      
      <ProductCard 
        product={product}
        style={{background:'#70d1f8'}}
        >
        <ProductImage style={{
          boxShadow: '10px 10px 10px rgba(0,0,0,2)'
        }}/>

        <ProductTitle title="Coffe Mug" style={{
          fontWeight: 'bolder'
        }}/>

        <ProductButtons style={{
          display: 'flex',
          justifyContent: 'center'
        }}/>
      </ProductCard>

      </div>
    </div>
  )
}
