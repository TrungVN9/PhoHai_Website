import React, {useState} from 'react'
import './menu.css'
import Categories from './catergories'
import Menu_list from './list'
import items from './menu_items'

export default function Menu() {

  const allCategories = ['all', ...new Set(
    items.map((item) => item.category)
    )]

  const [menuItems, setMenuItems] = useState(items)
  const [activeCategory, setActiveCategory] = useState('')
  const [categories] = useState(allCategories)

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    
    const newItems = items.filter((item) => 
    item.category === category)
    setMenuItems(newItems)
    };

    return (
      <main>
        <section className='menu-section'>
        <div className='menu'>
          <h1>menu</h1>
          <Categories categories={categories} 
          activeCategory ={activeCategory}
          filterItems={filterItems} 
          />
          <Menu_list items={menuItems} />
          </div>
        </section>
    </main>
  )
}