import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import '../App.css';
function MultiCarousel() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 481, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 769, itemsToShow: 3 },
    { width: 1025, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <Parent>
      <Carousel
        breakPoints={breakPoints}
        itemPadding={[0, 5]}
        itemsToShow={3}
        outerSpacing={30}
      >
        <ProductContainer className="individual-product-container">
          <div className="product-image">
            <img src="/bag1.webp" alt="product" className="product-image" />
          </div>
          <div className="product-desc-container">
            <div className="product-name-rating">
              <p className="product-name">Awesome Product</p>
              <p className="product-rating">5-Star Rating</p>
            </div>
            <div className="product-price-cart-cta">
              <p className="product-price">$25.99</p>
              <button className="cart-cta">add to cart</button>
            </div>
          </div>
        </ProductContainer>
        <ProductContainer className="individual-product-container">
          <div className="product-image">
            <img
              src="/brown-leather-bag.jpeg"
              alt="product"
              className="product-image"
            />
          </div>
          <div className="product-desc-container">
            <div className="product-name-rating">
              <p className="product-name">Awesome Product</p>
              <p className="product-rating">5-Star Rating</p>
            </div>
            <div className="product-price-cart-cta">
              <p className="product-price">$25.99</p>
              <button className="cart-cta">add to cart</button>
            </div>
          </div>
        </ProductContainer>
        <ProductContainer className="individual-product-container">
          <div className="product-image">
            <img src="/cute-bag.jpeg" alt="product" className="product-image" />
          </div>
          <div className="product-desc-container">
            <div className="product-name-rating">
              <p className="product-name">Awesome Product</p>
              <p className="product-rating">5-Star Rating</p>
            </div>
            <div className="product-price-cart-cta">
              <p className="product-price">$25.99</p>
              <button className="cart-cta">add to cart</button>
            </div>
          </div>
        </ProductContainer>
        <ProductContainer className="individual-product-container">
          <div className="product-image">
            <img
              src="/camping-bag.jpeg"
              alt="product"
              className="product-image"
            />
          </div>
          <div className="product-desc-container">
            <div className="product-name-rating">
              <p className="product-name">Awesome Product</p>
              <p className="product-rating">5-Star Rating</p>
            </div>
            <div className="product-price-cart-cta">
              <p className="product-price">$25.99</p>
              <button className="cart-cta">add to cart</button>
            </div>
          </div>
        </ProductContainer>
        <ProductContainer className="individual-product-container">
          <div className="product-image">
            <img
              src="/brown-leather-bag.jpeg"
              alt="product"
              className="product-image"
            />
          </div>
          <div className="product-desc-container">
            <div className="product-name-rating">
              <p className="product-name">Awesome Product</p>
              <p className="product-rating">5-Star Rating</p>
            </div>
            <div className="product-price-cart-cta">
              <p className="product-price">$25.99</p>
              <button className="cart-cta">add to cart</button>
            </div>
          </div>
        </ProductContainer>
        <ProductContainer className="individual-product-container">
          <div className="product-image">
            <img
              src="/brown-leather-bag.jpeg"
              alt="product"
              className="product-image"
            />
          </div>
          <div className="product-desc-container">
            <div className="product-name-rating">
              <p className="product-name">Awesome Product</p>
              <p className="product-rating">5-Star Rating</p>
            </div>
            <div className="product-price-cart-cta">
              <p className="product-price">$25.99</p>
              <button className="cart-cta">add to cart</button>
            </div>
          </div>
        </ProductContainer>
        <ProductContainer className="individual-product-container">
          <div className="product-image">
            <img src="/bag1.webp" alt="product" className="product-image" />
          </div>
          <div className="product-desc-container">
            <div className="product-name-rating">
              <p className="product-name">Awesome Product</p>
              <p className="product-rating">5-Star Rating</p>
            </div>
            <div className="product-price-cart-cta">
              <p className="product-price">$25.99</p>
              <button className="cart-cta">add to cart</button>
            </div>
          </div>
        </ProductContainer>
      </Carousel>
    </Parent>
  );
}

const Parent = styled.div`
  width: 100%;
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductContainer = styled.div`
  border: 2px solid magenta;
  width: 100%;
  height: 80vh;
  border-radius: 10px;
`;

export default MultiCarousel;
