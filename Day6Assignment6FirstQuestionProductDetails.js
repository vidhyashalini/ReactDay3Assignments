import React from 'react';

function ProductDetails(props) {
  function deleteProduct() {
    // Handle delete logic using props.onDeleteProduct
    props.onDeleteProduct(props.product.id);
  }
  
  return (
    <div style={{ float: 'left' }}>
      <div style={{ border: '2px solid green', padding: '10px', margin: '10px', borderRadius: '10px', width: '250px' }}>
        <h4 align="center">
          {props.product.id} - {props.product.name}
        </h4>
        <p>Category: {props.product.category}</p>
        <p>Price: {props.product.price}</p>
        <hr />
        <p style={{ textAlign: 'center', margin: '0px' }}>
          <a href="javascript:void(0);" onClick={deleteProduct}>
            <img src="images/delete.webp" alt="Delete" width="20" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
