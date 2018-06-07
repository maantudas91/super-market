import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RootCategory from './../../pages/root-cat/root-cat';
import MidCategory from './../../pages/mid-category/mid-category';

const Category = () => {
    return (
        <Switch>
            <Route exact path='/cn/:rootCat' component={RootCategory} />
            <Route exact path='/cn/:rootCat/:midcat' component={MidCategory}/>
        </Switch>        
    );
}

export default Category;