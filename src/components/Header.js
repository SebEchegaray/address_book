import React from 'react';
import {
  BrowserRouter,
  Routes,
  NavLink,
  Route,
} from 'react-router-dom';
import Card from '../UI/Card';
import List from "./List";

import './Header.css';

const Header = () => {
  const searchClickHandler = () => {
    console.log('This is working')
  }

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <header>
          <NavLink to="/" className="main-title__link"><h1>Address Book</h1></NavLink>
          <hr />
          <Card className="nav">
            <NavLink to="/list" className="link">Employees List</NavLink>
            <NavLink to="/search" onClick={searchClickHandler} className="link">Search</NavLink>
          </Card>
        </header>

        <section>
          <Routes>
            <Route path="/list" element={<List />} />
            { /*<Route path="/search" element={<Search />} /> */ }
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
};

export default Header;