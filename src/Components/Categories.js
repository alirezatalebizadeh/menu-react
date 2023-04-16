import React, { useState } from "react";

const Categories = ({ categories, filterMenus }) => {
  const [mainCategoris, setMainCategoris] = useState('all')

  console.log(categories)

  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        < button
          type="button"
          key={index}
          // highlight class  for highlight main category
          className={mainCategoris === category ? "filter-btn highlight" : "filter-btn"}
          onClick={() => {
            setMainCategoris(category)
            filterMenus(category)
          }}
        >
          {category}
        </button>
      ))
      }
    </div >
  );
};

export default Categories;
