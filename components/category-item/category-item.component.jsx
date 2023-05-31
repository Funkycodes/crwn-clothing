import React from "react";
import "./category-item.styles.scss";

function CategoryItem({ imageUrl, title }) {
  return (
    <div
      className="category-container"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
