import React from 'react';
import { useProducts } from '../useProducts';
import { Row, Col } from 'react-bootstrap';
import Product from './Product';
import './New.css';

const New = () => {
  const { categories, products } = useProducts();

  return (
    <div className="New">
      <h2 style={{textAlign: "center"}}>Clothing shop</h2>
      {categories.length && categories.map(category => {
          const hasProducts = products.filter(product => product.attributes.category.data.id === category.id);
          return hasProducts && hasProducts.length ? (
            <>
              <h2 className='category-title'>{category.attributes.name}</h2>
              <Row key={category.id}>
                {hasProducts.map(product => (
                  <Col key={product.id}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            </>
          ) : null;
        })
      }
    </div>
  );
};

export default New;