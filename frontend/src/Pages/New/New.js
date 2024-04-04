import React, { useState } from 'react';
import { useProducts } from '../useProducts';
import { Row, Col } from 'react-bootstrap';
import Product from './Product';
import './New.css';

const New = () => {
  const { categories, products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryID) => {
    setSelectedCategory(selectedCategory === categoryID ? null : categoryID);
  };

  return (
    <div className="New">
      <h2 style={{textAlign: "center"}}>Clothing shop</h2>
      {categories.map(category => {
        const hasProducts = products.filter(product => product.attributes.category.data.id === category.id);
        return (
          <div key={category.id}>
            <h2 className={`category-title ${selectedCategory === category.id ? 'selected' : ''}`} onClick={() => handleCategoryClick(category.id)}>{category.attributes.name}</h2>
            <div className={`product-container ${selectedCategory === category.id ? 'show' : ''}`}>
              <Row>
                {hasProducts.map(product => (
                  <Col key={product.id}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default New;