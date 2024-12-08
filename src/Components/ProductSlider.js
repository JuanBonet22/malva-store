import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ProductSlider.module.css";
import products from "../data/products.json"; 

const ProductSlider = () => {
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, 
    autoplaySpeed: 4000, // Tiempo entre cada deslizamiento (en ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <h2>Productos Destacados</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.sku} className={styles.productCard}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productPrice}>${product.price}</p>
            {product.comparePrice && (
              <p className={styles.productComparePrice}>
                Antes: ${product.comparePrice}
              </p>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
