import React from "react";
import CategoryItem from "../category-item/category-item.component";

import "./category.styles.scss";

function Directory({ categories }) {
  return (
    <div className="Categories">
      <div className="categories-container">
        {categories.map((category) => {
          return (
            <CategoryItem
              imageUrl={category.imageUrl}
              key={category.id}
              title={category.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Directory;
