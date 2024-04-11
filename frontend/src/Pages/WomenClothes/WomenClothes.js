import React from 'react';
import { useProducts } from '../../Components/Product/useProducts';
import { Row, Col } from 'react-bootstrap';
import Product from '../../Components/Product/Product';
import { Link } from 'react-router-dom';


const MenClothes = () => {
    const { categories, products } = useProducts();
    const firstCategory = categories[3];
  
    return (
        <div className="MenClothes">
            <h2>Women Clothes</h2>
            {firstCategory && (
                <div key={firstCategory.id} className="product-grid">
                    <Row className="product-row">
                        {products.filter(product => product.attributes.category.data.id === firstCategory.id).map(product => (
                            <Col key={product.id} className="product-col">
                                <Link to={`/product-details/${product.id}`} className="product-link">
                                    <div className="product">
                                        <Product product={product} />
                                        <p className="product-name">{product.name}</p>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </div>
    );
};

export default MenClothes;