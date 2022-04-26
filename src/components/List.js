import React from 'react';
import './List.css';

// FontAwesome icons import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownAZ } from '@fortawesome/free-solid-svg-icons'

const List = () => {
  return (
    <div className='list_wrapper'>
      {/* 
          Create a nav for sort names by
            - Surname
            - Phone number
            - Email address
       */}
      <nav className='list-nav'>
        <button className='list-btn'>Add</button>
        <button className='list-btn'>Remove</button>
        {/* <button className='list-btn'>Phone number</button>
        <button className='list-btn'>Email</button> */}
      </nav>

      <div class="list">
        {/* We are still not doing anything with the list but will do with an object to add and remove employees */}

        <div class="list_header">
          <h1 className='list_header-headline'>Employees</h1>
          <button className='list_header-sort'><FontAwesomeIcon className='btn-icon' icon={faArrowDownAZ} /> By Surname</button>
        </div>
      </div>
    </div>
  );
};

export default List;