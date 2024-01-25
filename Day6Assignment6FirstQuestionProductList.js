import React, { useState } from 'react';
import ProductDetails from './ProductDetails'; // Import the ProductDetails component

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Electronics', price: 10000 },
    { id: 2, name: 'Product 2', category: 'Clothing', price: 2000 },
    { id: 3, name: 'Product 3', category: 'HomeAppliances', price:700  },
    { id: 4, name: 'Product 4', category: 'KitchenAppliances', price:1000  },
    { id: 5, name: 'Product 5', category: 'Microwaveoven', price:10000},
    { id: 6, name: 'Product 6', category: 'TV', price: 40000 },
    { id: 7, name: 'Product 7', category: 'Books', price: 1000 },
    { id: 8, name: 'Product 8', category: 'Fresh', price: 100 },
   
  ]);

  function handleDeleteProduct(productId) {
    
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  }

  return (
    <div>
      {products.map((product) => (
        <ProductDetails key={product.id} product={product} onDeleteProduct={handleDeleteProduct} />
      ))}
    </div>
  );
}

export default ProductList;
