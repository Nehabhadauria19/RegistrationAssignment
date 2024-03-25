import React, { useState } from 'react';
import faker from 'faker';
import "./ProtectedPage.css"

// Generate 100 categories using Faker.js
const generateCategories = () => {
  const categories = [];
  for (let i = 0; i < 100; i++) {
    categories.push({
      id: i,
      name: faker.commerce.department(),
      checked: false // Add checked property to each category
    });
  }
  return categories;
};

const CategoriesList = ({ categories, handleCategoryToggle }) => {
  return (
    <ul>
      {categories.map(category => (
        <div key={category.id}>
          <label>
            <input
              type="checkbox"
              checked={category.checked}
              onChange={() => handleCategoryToggle(category.id)}
            />
            {category.name}
          </label>
        </div>
      ))}
    </ul>
  );
};

const PaginatedCategories = ({ categories, currentPage, itemsPerPage, handleCategoryToggle }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleCategories = categories.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <CategoriesList categories={visibleCategories} handleCategoryToggle={handleCategoryToggle} />
    </div>
  );
};

const ProtectedPage  = () => {
  const [categories, setCategories] = useState(generateCategories());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleCategoryToggle = (categoryId) => {
    setCategories(prevCategories => {
      return prevCategories.map(category => {
        if (category.id === categoryId) {
          return { ...category, checked: !category.checked };
        }
        return category;
      });
    });
  };

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const renderPaginationNumbers = () => {
    const paginationNumbers = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(startPage + 5, totalPages);
    for (let i = startPage; i <= endPage; i++) {
      paginationNumbers.push(
        <button key={i} onClick={() => setCurrentPage(i)} disabled={currentPage === i} className="pagination-button">
          {i}
        </button>
      );
    }
    return paginationNumbers;
  };

  return (
    <div className='login-form-container '>
       <div className="login-form-wrapper">
        <h3 className='head'>Please mark your Interests!</h3>
        <h4 className='middle-head'>We will keep you notified.</h4>
        <h5 >My saved Interests!</h5>
        <PaginatedCategories
          categories={categories}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          handleCategoryToggle={handleCategoryToggle}
        />
        <div className="pagination-container">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="pagination-button">{"<"}</button>
          {renderPaginationNumbers()}
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className="pagination-button">{">"}</button>
        </div>
      </div> 
    </div>
  );
};

export default ProtectedPage;
