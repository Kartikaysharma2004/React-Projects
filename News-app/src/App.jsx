import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';

const App = () => {
  const [category, setCategory] = useState('general'); // Default to general news

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div>
      <Navbar onCategoryChange={handleCategoryChange} />
      <NewsBoard category={category} />
    </div>
  );
}

export default App;
