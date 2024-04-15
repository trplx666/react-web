import React, { useState } from 'react';
import { useProducts } from '../../Components/Product/useProducts';
import { Row, Col } from 'react-bootstrap';
import Product from '../../Components/Product/Product';
import './New.css';
import { Link } from 'react-router-dom';
import ChatIcon from '../../Components/Chat/chat';

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
                    <Link to={`/product-details/${product.id}`}>
                    <Product product={product} />
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        );
      })}
    <ChatIcon />
    </div>
  );
};

export default New;