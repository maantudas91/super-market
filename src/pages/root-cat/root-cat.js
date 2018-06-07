import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import { Switch, Route } from 'react-router-dom';
import ProductSidebar from './../../components/product-sidebar/product-sidebar';
import ProductGrid from './../../components/product/product-grid';

// component which we will mount on top of the app
class RootCategory extends Component {
  
	
    componentWillMount() {
        alert('Private home is at: ' + this.props.location.pathname)
    }


  	render(){
    	console.log(this.props);
    	return (
    		<div className="container">
    			<div className="row">
		              <div className="col-md-3">
		                  <ProductSidebar/>
		              </div>
    				

    				<div className="col-md-9">
    				<h2>{this.props.match.params.rootCat}</h2>
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

export default RootCategory;