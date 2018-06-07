import React from 'react';
//import { Link } from 'react-router-dom';
import ProductGrid from './../../components/product/product-grid';
//import ProductSidebar from './../../components/product-sidebar/product-sidebar';

const Home = () => {
    return (
      <div className="container">
          <div className="row">
              
              
              <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <ProductGrid/>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <ProductGrid/>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <ProductGrid/>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <ProductGrid/>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <ProductGrid/>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <ProductGrid/>
                        </div>
                    </div>

              </div>
          </div>

      </div>
    );
}

export default Home;