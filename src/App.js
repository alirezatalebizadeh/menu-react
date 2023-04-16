import React, { useState } from 'react';
import menu from './data';
import Categories from './Components/Categories';
import Menu from './Components/Menu';

let allCategories = ['all', ...new Set(menu.map(item => item.category))]

function App() {

  const [allMenus, setAllMenus] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  const filterMenus = (category) => {
    if (category === 'all') {
      setAllMenus(menu)
      return
    }

    let filtered = menu.filter(menu => menu.category === category)
    setAllMenus(filtered)
  }


  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenus={filterMenus} />
        <Menu allMenus={allMenus} />
      </section>
    </main>
  );
}

export default App;
