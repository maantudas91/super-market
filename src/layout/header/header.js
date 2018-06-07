import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import TopNavigation from './../../components/top-navigation/top-navigation';

const Header = (props) => {
  console.log(props)
  const authenticated = props.authenticated;
    return (
    	<div>
        <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <NavLink className="text-muted" to="/blog" activeClassName="current">Blog</NavLink>
          </div>
          <div className="col-4 text-center">
            <Link className="blog-header-logo text-dark" to="/">Super Market</Link>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <Link className="text-muted" to="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
            </Link>
            <button type="button" className="btn btn-sm btn-outline-secondary">Sign in</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Sign up</button>
          </div>
          { authenticated && 
              <button type="button" className="btn btn-sm btn-outline-secondary">Logout</button>
          }
        </div>
      </header>

      <TopNavigation/>
      </div>
    );
}

export default Header;