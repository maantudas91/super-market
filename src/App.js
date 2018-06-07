import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header  from './layout/header/header';
import Footer  from './layout/footer/footer';
import Home from './pages/home/home';
import Blog from './pages/blog/blog';
import Category from './components/category/category';

//import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(location) {
        super(location);
        console.log(location);
    }

  render() {
    return (
      <div className="container">
        <Header authenticated="true"/>
          
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/blog' component={Blog}/>
                <Route path='/cn/:rootCat' component={Category}/>
            </Switch>
            
        <Footer/>

        <aside id="sidebar">
            <div id="dismiss">
                <i className="glyphicon glyphicon-arrow-left"></i>
            </div>
            <div className="sidebar-header">
                <h3>Collapsible Sidebar</h3>
            </div>

            
        </aside>
      </div>
    );
  }
}

export default App;
