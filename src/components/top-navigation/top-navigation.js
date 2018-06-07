import React from 'react';
import { NavLink } from 'react-router-dom';
import './top-navigation.css';

const TopNavigation = (props) => {
  console.log(props)
    return (
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <NavLink  className="p-2 text-muted" to="/cn/fruits-and-vegetables" activeClassName="current">Fruits & Vegetables</NavLink>
          <NavLink className="p-2 text-muted" to="/cn/grocery-and-staples" activeClassName="current">Grocery & Staples</NavLink>
          <NavLink className="p-2 text-muted" to="/cn/beverages" activeClassName="current">Beverages</NavLink>
          <NavLink className="p-2 text-muted" to="/cn/home-and-kitchen" activeClassName="current">Home & Kitchen</NavLink>
          <NavLink className="p-2 text-muted" to="/cn/furnishing-and-home-needs" activeClassName="current">Furnishing & Home Needs</NavLink>
          <NavLink className="p-2 text-muted" to="/cn/household-needs" activeClassName="current">Household Needs</NavLink>
          <NavLink className="p-2 text-muted" to="/cn/personal-care" activeClassName="current">Personal Care</NavLink>
        </nav>
      </div>
    );
}

export default TopNavigation;