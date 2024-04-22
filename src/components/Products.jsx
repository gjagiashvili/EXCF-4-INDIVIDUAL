import React, { useEffect, useState } from "react";
import styles from "../modules/Products.module.scss";
import heartIcon from "../assets/heart-icon.png";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const renderStars = (rating) => {
    const goldStars = rating;
    const grayStars = 5 - goldStars;

    const stars = [];
    for (let i = 0; i < goldStars; i++) {
      stars.push(<div key={i} className={styles["star"]}></div>);
    }
    for (let i = 0; i < grayStars; i++) {
      stars.push(
        <div key={goldStars + i} className={styles["gray-star"]}></div>
      );
    }
    return stars;
  };

  return (
    <div className={styles["container"]}>
      {products &&
        products.map((product) => (
          <div key={product._id} className={styles["card"]}>
            {product.category && (
              <div className={styles["category-box"]}>{product.category}</div>
            )}
            <img
              src={product.photo}
              alt={product.title}
              className={styles["img"]}
            />
            <div className={styles["favoriteButton"]}>
              <img
                src={heartIcon}
                alt="Favorite"
                className={styles["heartIcon"]}
              />
            </div>

            <div className={styles["product-details"]}>
              <div className={styles["title"]}>{product.title}</div>
              <div className={styles["underInfo"]}>
                <div className={styles["price"]}>${product.price}</div>
                <div className={styles["rating"]}>
                  {renderStars(product.rating)}
                  <span>({product.ratingAmt})</span>
                </div>
              </div>
              {product.options && (
                <div className={styles["options"]}>
                  {product.options.split(", ").map((color, index) => (
                    <button
                      key={index}
                      className={styles["colorButton"]}
                      style={{ backgroundColor: color }}
                      onClick={() => {}}
                    ></button>
                  ))}
                </div>
              )}
              <div className={styles["add-to-cart-button"]}>Add to Cart</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Products;
