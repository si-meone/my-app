import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div>
          <NavLink to="/article1">Article1</NavLink>
          <br/>
          <NavLink to="/article2">Article2</NavLink>
          <br/>
          <NavLink to="/article3">Article3</NavLink>
          <br/>
       </div>
    );
}

export default Navigation;