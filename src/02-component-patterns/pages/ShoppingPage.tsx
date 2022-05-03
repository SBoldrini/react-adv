import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../components';

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

      </div>

      <ProductCard product={product}>
        <ProductCard.Image />
        <ProductCard.Title title={'Coffee'}/>
        <ProductCard.Buttons />
      </ProductCard>
      
      <ProductCard product={product}>
        <ProductImage />
        <ProductTitle title={product.title}/>
        <ProductButtons />
      </ProductCard>
    </div>
  )
}
