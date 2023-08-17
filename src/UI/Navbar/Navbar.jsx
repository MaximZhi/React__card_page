import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
<div className='Navbar'>
<div className='Navbar__links'>
  <Link to='/about'>About Site</Link>
  <Link to='/posts'>Posts</Link>
</div>
</div>
     );
}
 
export default Navbar;