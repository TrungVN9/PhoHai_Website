import React from "react";
import './list.css'

const Menu_list = ({ items }) => {
    return (
      <div className="section-center">
        {items.map((item) => {
          const { id, title, img, price } = item;
          return (
            <article key={id} className="menu-item">
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4 className="title">{title}</h4>
                  <h4 className="price">${price}</h4>
                </header>
              </div>
            </article>
          );
        })}
      </div>
    );
  };
  
  export default Menu_list;