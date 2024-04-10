import React from 'react';
import { useProductInfo } from './UseProductInfo';
import { Card, Row, Col, CardImg, CardBody, CardTitle, CardText, CardSubtitle, Button } from 'react-bootstrap';
import './Details.css'; // Импорт файла стилей

const ProductInfo = () => {
  const { product, getImage, selectedSize, selectedColor, setSelectedSize, setSelectedColor } = useProductInfo();

  if (!product || !product.attributes) {
    return null;
  }

  const { attributes } = product;

  return (
    <Card className="product-details"> {/* Добавляем класс product-details */}
      <Row>
        <Col sm="12" md="4">
          <div >
            <CardImg
              left="true"
              width="100%"
              src={`http://localhost:1337${getImage(selectedColor)}`}
              alt=""
            />
          </div>
        </Col>
        <Col sm="12" md="8">
          <CardBody>
            <CardTitle>{attributes.name}</CardTitle>
            <CardText>{attributes.description}</CardText>
            <CardSubtitle>
              <strong>Price: £{attributes.price}</strong>
            </CardSubtitle>
            <div className="sizes"> {/* Добавляем класс sizes */}
              {attributes.sizes.map((size) => (
                <span
                  key={size.name}
                  className={`${selectedSize === size.name ? "active" : ""}`}
                  onClick={() => setSelectedSize(size.name)}
                >
                  {size.name}
                </span>
              ))}
            </div>
            <div className="colours"> {/* Добавляем класс colours */}
              {attributes.colours.map((colour) => (
                <span
                  key={colour.name}
                  className={`${selectedColor === colour.name ? "active" : ""}`}
                  onClick={() => setSelectedColor(colour.name)}
                >
                  <img
                    src={`http://localhost:1337${getImage(colour.name)}`}
                    alt={colour.name}
                  />
                </span>
              ))}
            </div>
            <Button color="primary">Add to basket</Button>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductInfo;
