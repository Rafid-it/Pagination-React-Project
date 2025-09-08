// ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-md transition p-4">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover rounded-md mb-3"
    />
    <h2 className="text-lg font-semibold">{product.name}</h2>
    <p className="text-gray-600">{product.price}</p>
  </div>
);

export default ProductCard;


