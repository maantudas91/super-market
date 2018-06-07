import React from 'react';
import { Link } from 'react-router-dom';
import './product-grid.css';


const ProductGrid = () => {
    return (
      <div className="my-list">
        <img src="http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png" alt="dsadas" />
        <h3>HP Core i3 6th Gen</h3>
        <span>RS:45K</span>
        <span className="pull-right">SKU:100022</span>
        <div className="offer">Extra 5% Off. Cart value Rs 500</div>
        <div className="detail">
        <p>Glyphicons in Bootstrap : Bootstrap Includes over 250 glyphs in font format </p>
        <img src="http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png" alt="dsadas" />
        <Link to="#" className="btn btn-info">Add To Cart</Link>
        <Link to="#" className="btn btn-info">Deatil</Link>
        </div>
      </div>
    );
}

export default ProductGrid;