import React, { Component } from 'react';
import ProductSidebar from './../../components/product-sidebar/product-sidebar';
import ProductGrid from './../../components/product/product-grid';

// component which we will mount on top of the app
class MidCategory extends Component {
  
  	render(){
    	console.log(this.props);
    	return (
    		<div className="container">
    			<div className="row">
		              <div className="col-md-3">
		                  <ProductSidebar/>
		              </div>
    				

    				<div className="col-md-9">
    				
                    <h2>{this.props.match.params.midcat}</h2>
                    <select>
                    <option>mbfds</option>
                    <option>zbdshb</option>
                    <option>zbfhj</option>
                    </select>

                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ProductGrid/>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ProductGrid/>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ProductGrid/>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ProductGrid/>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ProductGrid/>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ProductGrid/>
                        </div>
                    </div>

              </div>
    			</div>
    		</div>
    	);
  	}
}

export default MidCategory;